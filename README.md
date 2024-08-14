#  Assuresoft static home pages

To start using tailwind use
```bash
npx tailwindcss -i ./common/css/common.css -o ./common/css/tailwind.css --watch
```
## Using Relative Urls
### you should use relative paths relative to the output file of the initial command.
<br/>

In the Bolivia directory for example when setting a background url like this:
```html
<div class="bg-[url(./assets/waves.webp)]"></div>
```
your should use this instead:
```html
<div class="bg-[url(../../Bolivia/assets/waves.webp)]"></div>
```
<br/>

Or when using assets from the common folder like this:
```html
<div class="bg-[url(../common/assets/waves.webp)]"></div>
```
you should use this instead:
```html
<div class="bg-[url(../assets/waves.webp)]"></div>
```

## Notes on Symlinks
For windows users I would recommend using WSL to serve the project.
This is because of the usage of **symlinks** in the project.

