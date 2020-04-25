window.addEventListener("load", async () => {
    const initialisation_data = await eel.initialise()();
    console.log(initialisation_data);
});
