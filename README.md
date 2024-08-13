#  Assuresoft static home pages

to start using tailwind use
```bash
npx tailwindcss -i ./common/css/common.css -o ./common/css/tailwind.css --watch
```
## Using Reltive Urls
when using urls like this
```html
<div class="bg-[url(./assets/waves.webp)]"></div>
```
in the Bolivia directory for example, you should use relative paths relative to the output file of the initial command.

like this:
```html
<div class="bg-[url(../../Bolivia/assets/waves.webp)]"></div>
```
or when using assets from the common folder like this

```html
<div class="bg-[url(../common/assets/waves.webp)]"></div>
```
you should instead use
```html
<div class="bg-[url(../assets/waves.webp)]"></div>
```
