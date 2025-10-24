import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import datetime
import sqlite3
from persiandate import PersianDate
import pandas as pd
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from PIL import Image, ImageTk
import os
from pathlib import Path

# تنظیمات اولیه
FONT_PATH = "Vazir.ttf"
DB_PATH = "personnel.db"
PDF_OUTPUT = "Personnel_Report.pdf"
EXCEL_OUTPUT = "Personnel_Report.xlsx"

# ثبت فونت فارسی
try:
    pdfmetrics.registerFont(TTFont("Vazir", FONT_PATH))
except Exception as e:
    print(f"خطا در ثبت فونت: {e}")

class Database:
    """مدیریت اتصال و عملیات دیتابیس"""
    def __init__(self, db_path):
        self.conn = sqlite3.connect(db_path)
        self.cursor = self.conn.cursor()
        self.create_table()

    def create_table(self):
        self.cursor.execute('''
        CREATE TABLE IF NOT EXISTS personnel (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            personnel_code TEXT UNIQUE,
            birth_date TEXT,
            age INTEGER,
            issue_place TEXT,
            address TEXT,
            mobile_phone TEXT,
            national_code TEXT UNIQUE,
            id_number TEXT,
            father_name TEXT,
            job_title TEXT,
            work_place TEXT,
            marital_status TEXT,
            id_series TEXT,
            photo_path TEXT,
            documents_path TEXT,
            promissory_note_serial TEXT,
            emergency_phone1 TEXT,
            emergency_phone2 TEXT,
            hire_date TEXT,
            end_date TEXT,
            base_salary REAL,
            housing_allowance REAL,
            responsibility_allowance REAL,
            child_allowance REAL,
            grocery_allowance REAL,
            children_count INTEGER,
            status TEXT
        )
        ''')
        # افزودن ایندکس برای جستجوی سریع‌تر
        self.cursor.execute('CREATE INDEX IF NOT EXISTS idx_national_code ON personnel (national_code)')
        self.conn.commit()

    def insert_data(self, data):
        try:
            self.cursor.execute('''
            INSERT INTO personnel (
                first_name, last_name, personnel_code, birth_date, age, issue_place, address, mobile_phone,
                national_code, id_number, father_name, job_title, work_place, marital_status, id_series,
                photo_path, documents_path, promissory_note_serial, emergency_phone1, emergency_phone2,
                hire_date, end_date, base_salary, housing_allowance, responsibility_allowance,
                child_allowance, grocery_allowance, children_count, status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', data)
            self.conn.commit()
            return True
        except sqlite3.IntegrityError:
            return "کد پرسنلی یا کد ملی تکراری است!"
        except Exception as e:
            return str(e)

    def fetch_all(self):
        self.cursor.execute("SELECT * FROM personnel")
        return self.cursor.fetchall()

    def close(self):
        self.conn.close()

class PersonnelApp:
    def __init__(self, root):
        self.root = root
        self.root.title("برنامه مدیریت پرسنل")
        self.root.geometry("1000x800")
        self.root.configure(bg="#e6f0fa")
        self.db = Database(DB_PATH)

        # تنظیم استایل
        self.style = ttk.Style()
        self.style.theme_use("clam")
        self.style.configure("TLabel", font=("Vazir", 12), background="#e6f0fa")
        self.style.configure("TEntry", font=("Vazir", 12))
        self.style.configure("TButton", font=("Vazir", 12), padding=6)
        self.style.configure("Treeview", font=("Vazir", 11), rowheight=28)
        self.style.configure("Treeview.Heading", font=("Vazir", 12, "bold"), background="#d1e7ff")

        # متغیرها
        self.entries = {}
        self.photo_path = tk.StringVar()
        self.documents_path = tk.StringVar()
        self.photo_img = None

        # ایجاد رابط کاربری
        self.create_widgets()

    def create_widgets(self):
        # فریم اصلی با اسکرول
        self.main_frame = tk.Frame(self.root, bg="#e6f0fa")
        self.main_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=10)

        self.canvas = tk.Canvas(self.main_frame, bg="#e6f0fa")
        self.scrollbar = ttk.Scrollbar(self.main_frame, orient="vertical", command=self.canvas.yview)
        self.scrollable_frame = tk.Frame(self.canvas, bg="#e6f0fa")

        self.scrollable_frame.bind(
            "<Configure>",
            lambda e: self.canvas.configure(scrollregion=self.canvas.bbox("all"))
        )

        self.canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        self.canvas.configure(yscrollcommand=self.scrollbar.set)
        self.canvas.pack(side="left", fill="both", expand=True)
        self.scrollbar.pack(side="right", fill="y")

        # فیلدهای فرم
        fields = [
            ("نام", "first_name"), ("نام خانوادگی", "last_name"), ("کد پرسنلی", "personnel_code"),
            ("تاریخ تولد (YYYY/MM/DD شمسی)", "birth_date"), ("سن", "age", tk.Label),
            ("محل صدور", "issue_place"), ("آدرس سکونت", "address"), ("تلفن همراه", "mobile_phone"),
            ("کد ملی (۱۰ رقم)", "national_code"), ("شماره شناسنامه", "id_number"),
            ("نام پدر", "father_name"), ("شغل", "job_title"), ("محل خدمت", "work_place"),
            ("وضعیت تأهل", "marital_status"), ("سریال سری و حرف شناسنامه", "id_series"),
            ("عکس پرسنلی", "photo", ttk.Button, self.upload_photo), ("عکس مدارک", "documents", ttk.Button, self.upload_documents),
            ("سریال سفته", "promissory_note_serial"), ("تلفن ضروری ۱", "emergency_phone1"),
            ("تلفن ضروری ۲", "emergency_phone2"), ("تاریخ استخدام (YYYY/MM/DD شمسی)", "hire_date"),
            ("تاریخ پایان کار (YYYY/MM/DD شمسی)", "end_date"), ("حقوق پایه", "base_salary"),
            ("حق مسکن", "housing_allowance"), ("حق مسئولیت", "responsibility_allowance"),
            ("حق اولاد", "child_allowance"), ("بن خواروبار", "grocery_allowance"),
            ("تعداد اولاد", "children_count"), ("وضعیت", "status")
        ]

        for i, (label_text, field_name, widget_type=ttk.Entry, command=None) in enumerate(fields):
            tk.Label(self.scrollable_frame, text=label_text + ":", font=("Vazir", 12), bg="#e6f0fa", fg="#333").grid(row=i, column=0, padx=10, pady=5, sticky="e")
            if widget_type == tk.Label:
                self.entries[field_name] = tk.Label(self.scrollable_frame, text="0", font=("Vazir", 12), bg="#e6f0fa", fg="#333")
            elif widget_type == ttk.Button:
                self.entries[field_name] = ttk.Button(self.scrollable_frame, text=f"آپلود {label_text}", command=command)
            else:
                self.entries[field_name] = widget_type(self.scrollable_frame, font=("Vazir", 12), width=30)
            self.entries[field_name].grid(row=i, column=1, padx=10, pady=5, sticky="w")

        self.entries["birth_date"].bind("<FocusOut>", self.calculate_age)

        # فریم دکمه‌ها
        self.buttons_frame = tk.Frame(self.root, bg="#e6f0fa")
        self.buttons_frame.pack(pady=10)
        buttons = [
            ("ذخیره", self.save_data), ("پاک کردن", self.clear_form),
            ("نمایش اطلاعات", self.view_data), ("ایجاد گزارش", self.generate_report)
        ]
        for text, command in buttons:
            ttk.Button(self.buttons_frame, text=text, command=command).pack(side=tk.LEFT, padx=5)

        # نمایش عکس پرسنلی
        self.photo_label = tk.Label(self.root, bg="#e6f0fa", borderwidth=2, relief="groove")
        self.photo_label.pack(pady=10)

    def validate_national_code(self, code):
        if not code.isdigit() or len(code) != 10:
            return False
        check = int(code[9])
        s = sum(int(code[i]) * (10 - i) for i in range(9)) % 11
        return (s < 2 and check == s) or (s >= 2 and check == 11 - s)

    def calculate_age(self, event):
        try:
            birth_date_str = self.entries["birth_date"].get()
            year, month, day = map(int, birth_date_str.split('/'))
            persian_birth_date = PersianDate(year, month, day)
            gregorian_birth_date = persian_birth_date.to_gregorian()
            today = datetime.date.today()
            age = today.year - gregorian_birth_date.year - ((today.month, today.day) < (gregorian_birth_date.month, gregorian_birth_date.day))
            self.entries["age"].config(text=str(age))
        except Exception:
            self.entries["age"].config(text="نامعتبر")

    def upload_photo(self):
        file_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg *.png *.jpeg")])
        if file_path:
            self.photo_path.set(file_path)
            img = Image.open(file_path).resize((150, 150), Image.Resampling.LANCZOS)
            self.photo_img = ImageTk.PhotoImage(img)
            self.photo_label.config(image=self.photo_img)

    def upload_documents(self):
        file_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg *.png *.jpeg")])
        if file_path:
            self.documents_path.set(file_path)

    def save_data(self):
        national_code = self.entries["national_code"].get()
        if not self.validate_national_code(national_code):
            messagebox.showerror("خطا", "کد ملی نامعتبر است!")
            return

        try:
            data = (
                self.entries["first_name"].get(), self.entries["last_name"].get(),
                self.entries["personnel_code"].get(), self.entries["birth_date"].get(),
                int(self.entries["age"].cget("text")), self.entries["issue_place"].get(),
                self.entries["address"].get(), self.entries["mobile_phone"].get(),
                national_code, self.entries["id_number"].get(), self.entries["father_name"].get(),
                self.entries["job_title"].get(), self.entries["work_place"].get(),
                self.entries["marital_status"].get(), self.entries["id_series"].get(),
                self.photo_path.get(), self.documents_path.get(),
                self.entries["promissory_note_serial"].get(), self.entries["emergency_phone1"].get(),
                self.entries["emergency_phone2"].get(), self.entries["hire_date"].get(),
                self.entries["end_date"].get(),
                float(self.entries["base_salary"].get() or 0),
                float(self.entries["housing_allowance"].get() or 0),
                float(self.entries["responsibility_allowance"].get() or 0),
                float(self.entries["child_allowance"].get() or 0),
                float(self.entries["grocery_allowance"].get() or 0),
                int(self.entries["children_count"].get() or 0),
                self.entries["status"].get()
            )
            result = self.db.insert_data(data)
            if result is True:
                messagebox.showinfo("موفقیت", "اطلاعات با موفقیت ذخیره شد!")
                self.clear_form()
            else:
                messagebox.showerror("خطا", result)
        except Exception as e:
            messagebox.showerror("خطا", f"خطا در ذخیره اطلاعات: {e}")

    def clear_form(self):
        for key, widget in self.entries.items():
            if isinstance(widget, (ttk.Entry, ttk.Combobox)):
                widget.delete(0, tk.END)
            elif isinstance(widget, tk.Label):
                widget.config(text="0")
        self.photo_path.set("")
        self.documents_path.set("")
        self.photo_label.config(image="")

    def view_data(self):
        view_window = tk.Toplevel(self.root)
        view_window.title("نمایش اطلاعات پرسنل")
        view_window.geometry("1200x600")
        view_window.configure(bg="#e6f0fa")

        columns = (
            "id", "first_name", "last_name", "personnel_code", "birth_date", "age", "issue_place",
            "address", "mobile_phone", "national_code", "id_number", "father_name", "job_title",
            "work_place", "marital_status", "id_series", "photo_path", "documents_path",
            "promissory_note_serial", "emergency_phone1", "emergency_phone2", "hire_date",
            "end_date", "base_salary", "housing_allowance", "responsibility_allowance",
            "child_allowance", "grocery_allowance", "children_count", "status"
        )
        column_names = (
            "شناسه", "نام", "نام خانوادگی", "کد پرسنلی", "تاریخ تولد", "سن", "محل صدور",
            "آدرس", "تلفن همراه", "کد ملی", "شماره شناسنامه", "نام پدر", "شغل",
            "محل خدمت", "وضعیت تأهل", "سریال شناسنامه", "عکس پرسنلی", "عکس مدارک",
            "سریال سفته", "تلفن ضروری ۱", "تلفن ضروری ۲", "تاریخ استخدام", "تاریخ پایان",
            "حقوق پایه", "حق مسکن", "حق مسئولیت", "حق اولاد", "بن خواروبار", "تعداد اولاد", "وضعیت"
        )

        tree = ttk.Treeview(view_window, columns=columns, show="headings")
        for col, name in zip(columns, column_names):
            tree.heading(col, text=name)
            tree.column(col, width=100, anchor="center")

        scrollbar = ttk.Scrollbar(view_window, orient="vertical", command=tree.yview)
        tree.configure(yscroll=scrollbar.set)
        scrollbar.pack(side="right", fill="y")
        tree.pack(fill="both", expand=True, padx=10, pady=10)

        for row in self.db.fetch_all():
            tree.insert("", tk.END, values=row)

        # دکمه‌های ویرایش و حذف
        btn_frame = tk.Frame(view_window, bg="#e6f0fa")
        btn_frame.pack(pady=5)
        ttk.Button(btn_frame, text="ویرایش", command=lambda: self.edit_record(tree)).pack(side=tk.LEFT, padx=5)
        ttk.Button(btn_frame, text="حذف", command=lambda: self.delete_record(tree)).pack(side=tk.LEFT, padx=5)

    def edit_record(self, tree):
        selected = tree.selection()
        if not selected:
            messagebox.showwarning("هشدار", "لطفاً یک رکورد انتخاب کنید!")
            return
        item = tree.item(selected[0])
        values = item["values"]
        self.clear_form()
        fields = [
            "first_name", "last_name", "personnel_code", "birth_date", "age", "issue_place",
            "address", "mobile_phone", "national_code", "id_number", "father_name", "job_title",
            "work_place", "marital_status", "id_series", "photo", "documents",
            "promissory_note_serial", "emergency_phone1", "emergency_phone2", "hire_date",
            "end_date", "base_salary", "housing_allowance", "responsibility_allowance",
            "child_allowance", "grocery_allowance", "children_count", "status"
        ]
        for field, value in zip(fields, values[1:]):  # رد شدن از id
            if field in ["photo", "documents"]:
                continue
            if field == "age":
                self.entries[field].config(text=str(value))
            else:
                self.entries[field].delete(0, tk.END)
                self.entries[field].insert(0, str(value))
        self.photo_path.set(values[16])
        self.documents_path.set(values[17])

        # دکمه ذخیره برای به‌روزرسانی
        self.save_button.config(text="به‌روزرسانی", command=lambda: self.update_record(values[0]))

    def update_record(self, record_id):
        data = (
            self.entries["first_name"].get(), self.entries["last_name"].get(),
            self.entries["personnel_code"].get(), self.entries["birth_date"].get(),
            int(self.entries["age"].cget("text")), self.entries["issue_place"].get(),
            self.entries["address"].get(), self.entries["mobile_phone"].get(),
            self.entries["national_code"].get(), self.entries["id_number"].get(),
            self.entries["father_name"].get(), self.entries["job_title"].get(),
            self.entries["work_place"].get(), self.entries["marital_status"].get(),
            self.entries["id_series"].get(), self.photo_path.get(), self.documents_path.get(),
            self.entries["promissory_note_serial"].get(), self.entries["emergency_phone1"].get(),
            self.entries["emergency_phone2"].get(), self.entries["hire_date"].get(),
            self.entries["end_date"].get(),
            float(self.entries["base_salary"].get() or 0),
            float(self.entries["housing_allowance"].get() or 0),
            float(self.entries["responsibility_allowance"].get() or 0),
            float(self.entries["child_allowance"].get() or 0),
            float(self.entries["grocery_allowance"].get() or 0),
            int(self.entries["children_count"].get() or 0),
            self.entries["status"].get(),
            record_id
        )
        try:
            self.db.cursor.execute('''
            UPDATE personnel SET
                first_name=?, last_name=?, personnel_code=?, birth_date=?, age=?, issue_place=?, address=?,
                mobile_phone=?, national_code=?, id_number=?, father_name=?, job_title=?, work_place=?,
                marital_status=?, id_series=?, photo_path=?, documents_path=?, promissory_note_serial=?,
                emergency_phone1=?, emergency_phone2=?, hire_date=?, end_date=?, base_salary=?,
                housing_allowance=?, responsibility_allowance=?, child_allowance=?, grocery_allowance=?,
                children_count=?, status=?
            WHERE id=?
            ''', data)
            self.db.conn.commit()
            messagebox.showinfo("موفقیت", "رکورد به‌روزرسانی شد!")
            self.clear_form()
            self.save_button.config(text="ذخیره", command=self.save_data)
        except Exception as e:
            messagebox.showerror("خطا", f"خطا در به‌روزرسانی: {e}")

    def delete_record(self, tree):
        selected = tree.selection()
        if not selected:
            messagebox.showwarning("هشدار", "لطفاً یک رکورد انتخاب کنید!")
            return
        if messagebox.askyesno("تأیید", "آیا مطمئن هستید که می‌خواهید این رکورد را حذف کنید؟"):
            item = tree.item(selected[0])
            record_id = item["values"][0]
            try:
                self.db.cursor.execute("DELETE FROM personnel WHERE id=?", (record_id,))
                self.db.conn.commit()
                tree.delete(selected[0])
                messagebox.showinfo("موفقیت", "رکورد حذف شد!")
            except Exception as e:
                messagebox.showerror("خطا", f"خطا در حذف: {e}")

    def generate_report(self):
        try:
            rows = self.db.fetch_all()
            if not rows:
                messagebox.showwarning("هشدار", "هیچ داده‌ای برای گزارش وجود ندارد!")
                return

            columns = [
                "شناسه", "نام", "نام خانوادگی", "کد پرسنلی", "تاریخ تولد", "سن", "محل صدور", "آدرس",
                "تلفن همراه", "کد ملی", "شماره شناسنامه", "نام پدر", "شغل", "محل خدمت", "وضعیت تأهل",
                "سریال شناسنامه", "عکس پرسنلی", "عکس مدارک", "سریال سفته", "تلفن ضروری ۱", "تلفن ضروری ۲",
                "تاریخ استخدام", "تاریخ پایان", "حقوق پایه", "حق مسکن", "حق مسئولیت", "حق اولاد",
                "بن خواروبار", "تعداد اولاد", "وضعیت"
            ]

            # تولید فایل اکسل
            df = pd.DataFrame(rows, columns=columns)
            df.to_excel(EXCEL_OUTPUT, index=False, engine='openpyxl')

            # تولید PDF با جدول‌بندی بهتر
            c = canvas.Canvas(PDF_OUTPUT, pagesize=A4)
            c.setFont("Vazir", 12)
            width, height = A4
            y = height - 50
            c.drawString(width - 100, y, "گزارش پرسنل", mode=2)
            y -= 30

            # تنظیم جدول
            col_width = 60
            x_start = width - 30
            y -= 20
            for col in columns:
                c.drawString(x_start - col_width, y, col, mode=2)
                x_start -= col_width
            y -= 10
            c.setLineWidth(0.5)
            c.line(30, y, width - 30, y)

            # داده‌ها
            for row in rows:
                if y < 50:
                    c.showPage()
                    c.setFont("Vazir", 12)
                    y = height - 50
                    x_start = width - 30
                    for col in columns:
                        c.drawString(x_start - col_width, y, col, mode=2)
                        x_start -= col_width
                    y -= 10
                    c.line(30, y, width - 30, y)
                x_start = width - 30
                for value in row:
                    c.drawString(x_start - col_width, y - 20, str(value)[:20], mode=2)
                    x_start -= col_width
                y -= 20
            c.showPage()
            c.save()

            messagebox.showinfo("موفقیت", f"گزارش در {EXCEL_OUTPUT} و {PDF_OUTPUT} ذخیره شد!")
        except Exception as e:
            messagebox.showerror("خطا", f"خطا در تولید گزارش: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    app = PersonnelApp(root)
    root.mainloop()
