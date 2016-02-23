# cli-weather

![](https://mvistatic.com/design/images/meteo/pictos/P2.png)

Cli-Weather is a free client to display the current and forecast weather on your terminal.


## Table of content

- [Features](#Features)
- [Installation](#installation)
- [Usage](#usage)
    - [Examples](#examples)
- [Configuration](#configuration)
- [License](#license)
- [Links](#links)

## Features 

- Written in uncomplicated Javascript
- Easy to [install](https://github.com/alice/cli-weather#installation)
- Works on Mac, Linux and Windows
- Suppors other version control systems

## Installation

- Fork the project
- Clone in the repository of your choice
```bash
$ git clone 
```
- Install modules
```bash
$ npm install
```
- Installation 
```bash
$ npm install cli-weather -g
```

## Usage
```bash
$ weather -help

cli-weather, version 1.3.86
--------------------------
available commands:
         -a, --address  pass address
         -s, --save     save preset(s)
         --long         pass longitude (requires --lat)
         --lat          pass latitude (requires --long)
         -c, --config   use metric
         -h, --help     display this help text
         -v, --verbose  verbose

 ```

### Examples

![](http://img11.hostingpics.net/pics/464904example.png)

```bash  
$ weather
```

- Pass adress
```bash  
$ weather -a "Courbevoie"
```

- Pass longitude / latitude
```bash  
$ weather --lat=48.8967 --long=-2.2567
```

- Units : use the -c option to specify metric units
```bash  
$ weather -c
```

- Display the location
```bash  
$ weather -v
```

## Configuration 

You can save your parameters with `--save`  or `-s`

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)

## Link
[The exercise subject](https://github.com/aliicedu/rdd-cdd-tdd/blob/master/README.md) for more informations