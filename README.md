# SilverStripe Installer

## Requirements

This installer requires you have the following:

- silverstripe/cms ^3.2
- silverstripe/framework ^3.2
- [Composer](https://getcomposer.org/)
- [npm](https://www.npmjs.com/)
- [Elixir](https://laravel.com/docs/5.2/elixir)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Installation
Use composer to quickly create a new project:

```
composer create-project gorriecoe/silverstripe-installer
```

Next install the packages required for development.

```
npm install
```

During development run

```
gulp watch
```

To minify assets ready for production run

```
gulp watch --production
```

### Developing multiple themes

By default gulp with compile myresources/default.  If you need to complile a different theme you can specify it it with the parameter `--theme` for example:

```
gulp watch --production --theme=mythemename
```

## Maintainers
 * Gorrie <gorriecoe@gmail.com>

## Bugtracker
Bugs are tracked in the issues section of this repository. Before submitting an issue please read over
existing issues to ensure yours is unique.

If the issue does look like a new bug:

 - Create a new issue
 - Describe the steps required to reproduce your issue, and the expected outcome. Unit tests, screenshots
 and screencasts can help here.
 - Describe your environment as detailed as possible: SilverStripe version, Browser, PHP version,
 Operating System, any installed SilverStripe modules.

Please report security issues to the module maintainers directly. Please don't file security issues in the bugtracker.

## Development and contribution
If you would like to make contributions to the module please ensure you raise a pull request and discuss with the module maintainers.
