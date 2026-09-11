<h1 align="center">Auto PY to EXE</h1>
<p align="center">Convertissez vos fichiers de .py à .exe grâce à une interface graphique simple et <a href="https://pyinstaller.readthedocs.io/en/stable/index.html">PyInstaller</a> avec Python.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Interface vide">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="Version sur PyPI"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="Versions supportées selon PyPI"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="Licence"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Téléchargements par mois"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Plateformes supportées"></a>
    <a href="https://www.buymeacoffee.com/brentvollebregt"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0beer-gray?logo=buy-me-a-coffee" alt="Faire un don"></a>
</p>

[English](../../README.md)
| [简体中文](./README-Chinese_Simplified.md)
| [Suomen kieli](./README-Finnish.md)
| [Türkçe](./README-Turkish.md)
| [فارسی](./README-Persian.md)
| [한국어](./README-Korean.md)
| [Български](./README-Bulgarian.md)
| [हिन्दी](./README-Hindi.md)
| [עברית](./README-Hebrew.md)
| [العربية](./README-Arabic.md)
| [Беларуская](./README-Belarusian.md)
| [Slovenščina](./README-Slovenian.md)
| [српски](./README-Serbian_Cyrillic.md)
| [srpski](./README-Serbian_Latin.md)
| [Русский](./README-Russian.md)
| **Français**

## Démo

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/auto-py-to-exe-demo.gif" alt="Démo d'auto-py-to-exe">
</p>

## Démarrage

### Prérequis

- Python : 3.6-3.14

_Pour que l'interface soit la même que celle dans les images, vous aurez besoin d'installer Chrome. Si Chrome n'est pas installé ou que l'argument `--default-browser` est utilisé, le navigateur par défaut sera utilisé._

### Installation et Utilisation

#### Installer avec [PyPI](https://pypi.org/project/auto-py-to-exe/)

Vous pouvez installer ce projet avec PyPI:

```
pip install auto-py-to-exe
```

Ensuite, pour le lancer, exécutez la commande ci-dessous dans un terminal :

```
auto-py-to-exe
```

> Si vous avez installé plus d'une version de Python, utilisez `python -m auto_py_to_exe` au lieu de `auto-py-to-exe`.

#### Installer avec [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
git clone https://github.com/brentvollebregt/auto-py-to-exe.git
cd auto-py-to-exe
python setup.py install
```

Ensuite, pour le lancer, exécutez la commande ci-dessous dans un terminal :

```
auto-py-to-exe
```

#### Lancer localement avec GitHub [Github](https://github.com/brentvollebregt/auto-py-to-exe) (sans installer)

Vous pouvez lancer ce projet localement en suivant les étapes suivantes :

1. Clonez/téléchargez le [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. Ouvrez votre cmd/terminal et allez au dossier racine du projet
3. Exécutez `python -m pip install -r requirements.txt`
4. Exécutez `python -m auto_py_to_exe` pour lancer l'application

## Utiliser l'Application

1. Sélectionnez l'emplacement de votre script (copiez-collez le ou utilisez le bouton parcourir)
   - Le contour deviendra bleu si le fichier éxiste
2. Sélectionnez d'autres options et ajoutez une icone ou des fichiez supplémentaires par exemple
3. Cliquez sur le gros bouton bleu en bas pour convertir le script
4. Trouvez vos fichiers convertis dans /output une fois que la conversion est terminée

_Facile._

### Arguments

N'hésitez pas à utiliser le drapeau d'aide : `auto-py-to-exe --help`

| Argument                                                                                 | Type                  | Description                                                                                                           |
| ---------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| filename                                                                                 | positionnel/optionnel | Pré-remplir le champ "Emplacement des scripts" dans l'UI.                                                             |
| -db, --default-browser                                                                   | optionnel             | Ouvrir k'UI avec le navigateur par défaut (qui peut être Chrome) sans essayer de chercher Chrome.                     |
| -nu, --no-ui                                                                             | optionnel             | Ne pas essayer d'ouvrir l'UI dans un navigateur et simplement afficher l'endroit où l'application peut être accédée.  |
| -c [CONFIG], --config [CONFIG]                                                           | optionnel             | Donner un fichier de configuration (JSON) pour pré-remplir l'UI. Ils peuvent être générés dans l'onglet "Paramètres". |
| -o [CHEMIN_D_ACCES], --output-dir [CHEMIN_D_ACCES]                                       | optionnel             | Choisir le dossier de sortie par défaut (toujours modifiable dans l'UI).                                              |
| -bdo [CHEMIN_D_ACCES_DU_DOSSIER], --build-directory-override [CHEMIN_D_ACCES_DU_DOSSIER] | optionnel             | Passer outre le dossier de sortie par défaut. Utile si votre antivirus n'arrête pas de supprimer vos fichiers.        |
| -lang [CODE_LANGUE], --language [CODE_LANGUE]                                            | optionnel             | Dire à l'UI en quel langue elle devrait être.                                                                         |

### Configuration JSON

Au lieu d'insérer les mêmes données dans l'UI encore et encore, vous pouvez exporter la configuration actuelle en allant dans la séction "Configuration" dans l'onglet des paramètres et en exportant la configuration dans un fichier JSON. Il pourra être réimporté dans l'UI pour recompléter tous les champs.

Cet export de configuration JSON n'enregistre pas le répertoire de sortie automatiquement car la structure de répertoires serait différente sur une autre machine. Si vous voulez ajouter le répertoire de sortie dans la configuration JSON ajoutez la clé `nonPyinstallerOptions.outputDirectory` et donnez-lui pour valeur le chemin d'accès vers le répertoire.

## Exemples

Le dossier [examples/](../../examples/) montre comment écrire vos scripts et les empaqueter avec auto-py-to-exe.

- [Basic (console application)](../../examples/1-basic/readme.md)
- [No Console (as typically desired for GUI-based applications)](../../examples/2-no-console/readme.md)
- [Images and other non-.py files (static files to be included)](../../examples/3-images-and-other-non-py-files/readme.md)
- [Persistent data (like databases)](../../examples/4-persistent-data/readme.md)

## Vidéo

Si vous avez besoin de quelque chose de visuel pour vous aider à démarrer, [j'ai fait une vidéo lors de la publication de la version originale](https://youtu.be/OZSZHmWSOeM); certaines choses ont peut-être changé mais le concept est le même.

## Contribuer

Jetez un coup d'œuil à [CONTRIBUTING.md](../../CONTRIBUTING.md) pour voir les lignes directrices pour contribuer à ce projet. Ce fichier détaile ce que vous devez faire si vous avez une nouvelle fonctionnalité, un changement, une traduction, ou si vous avez trouvé un bug dans auto-py-to-exe.

## Problèmes lors de l'utilisation de l'outil

Si vous avez un problème avec l'exécutable généré ou cet outil en général, je vous recommande de lire [mon post sur des problèmes communs lors de l'utilisation d'auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). Ce post parle des choses à savoir lors de la transformation d'un script Python en exécutable et des solutions pour les problèmes communs.

Si vous pensez avoir trouvé un bug dans cet outil, allez voir la [séction "Reporter un problème" dans CONTRIBUTING.md](../../CONTRIBUTING.md#reporting-an-issue).

## Support de Python 2.7

Depuis la publication de [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0) le 9 août 2020, Python 2.7 n'est plus supporté; mais vous pouvez toujours utiliser cet outil sur Python 2.7 en installant une version plus ancienne de PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) était la dernière version supportée par Python 2.7; pour l'installer, il faut d'abord désinstaller toutes les versions éxistantes de PyInstaller puis exécuter `python -m pip install pyinstaller==3.6`.

## Tests

Les tests sont dans le dossier [tests/](../../tests/) et se lancent en utilisant pytest:

```
pip install pytest
pip install -e .
pytest
```

## Captures d'écran

| <!-- -->                                                                                                                                            | <!-- -->                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![Interface vide](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Remplie](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Conversion en cours...](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)   | [![Terminé](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)   |
