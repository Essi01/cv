https://github.com/RiadhAdrani/slick-portfolio-svelte?ref=sveltethemes.dev

# Start npm run dev


Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Espen> cd github
PS C:\Users\Espen\github> cd .\slick-portfolio-svelte\
PS C:\Users\Espen\github\slick-portfolio-svelte> npm install
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: eslint-plugin-svelte3@4.0.0
npm error Found: svelte@4.2.1
npm error node_modules/svelte
npm error   dev svelte@"4.2.1" from the root project
npm error   node_modules/@sveltejs/kit
npm error     dev @sveltejs/kit@"1.25.0" from the root project
npm error     peer @sveltejs/kit@"^1.0.0" from @sveltejs/adapter-auto@2.1.0
npm error     node_modules/@sveltejs/adapter-auto
npm error       dev @sveltejs/adapter-auto@"2.1.0" from the root project
npm error     1 more (@sveltejs/adapter-static)
npm error   5 more (@sveltejs/vite-plugin-svelte, ...)
npm error
npm error Could not resolve dependency:
npm error peer svelte@"^3.2.0" from eslint-plugin-svelte3@4.0.0
npm error node_modules/eslint-plugin-svelte3
npm error   dev eslint-plugin-svelte3@"^4.0.0" from the root project
npm error
npm error Conflicting peer dependency: svelte@3.59.2
npm error node_modules/svelte
npm error   node_modules/eslint-plugin-svelte3
npm error     dev eslint-plugin-svelte3@"^4.0.0" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\Espen\AppData\Local\npm-cache\_logs\2024-08-25T18_46_06_847Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\Espen\AppData\Local\npm-cache\_logs\2024-08-25T18_46_06_847Z-debug-0.log
PS C:\Users\Espen\github\slick-portfolio-svelte> npm install --legacy-peer-deps

up to date, audited 301 packages in 3s

75 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 low, 3 moderate, 3 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\Espen\github\slick-portfolio-svelte> npm install --force
npm warn using --force Recommended protections disabled.
npm warn ERESOLVE overriding peer dependency
npm warn While resolving: eslint-plugin-svelte3@4.0.0
npm warn Found: svelte@4.2.1
npm warn node_modules/svelte
npm warn   dev svelte@"4.2.1" from the root project
npm warn   6 more (@sveltejs/kit, @sveltejs/vite-plugin-svelte, ...)
npm warn
npm warn Could not resolve dependency:
npm warn peer svelte@"^3.2.0" from eslint-plugin-svelte3@4.0.0
npm warn node_modules/eslint-plugin-svelte3
npm warn   dev eslint-plugin-svelte3@"^4.0.0" from the root project
npm warn
npm warn Conflicting peer dependency: svelte@3.59.2
npm warn node_modules/svelte
npm warn   peer svelte@"^3.2.0" from eslint-plugin-svelte3@4.0.0
npm warn   node_modules/eslint-plugin-svelte3
npm warn     dev eslint-plugin-svelte3@"^4.0.0" from the root project
npm warn ERESOLVE overriding peer dependency
npm warn While resolving: prettier-plugin-svelte@2.9.0
npm warn Found: svelte@4.2.1
npm warn   dev svelte@"4.2.1" from the root project
npm warn   6 more (@sveltejs/kit, @sveltejs/vite-plugin-svelte, ...)
npm warn
npm warn Could not resolve dependency:
npm warn peer svelte@"^3.2.0" from prettier-plugin-svelte@2.9.0
npm warn node_modules/prettier-plugin-svelte
npm warn   dev prettier-plugin-svelte@"^2.8.1" from the root project
npm warn
npm warn Conflicting peer dependency: svelte@3.59.2
npm warn node_modules/svelte
npm warn   peer svelte@"^3.2.0" from prettier-plugin-svelte@2.9.0
npm warn   node_modules/prettier-plugin-svelte
npm warn     dev prettier-plugin-svelte@"^2.8.1" from the root project

up to date, audited 301 packages in 3s

75 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 low, 3 moderate, 3 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\Espen\github\slick-portfolio-svelte> npm run dev

> riadh-adrani@0.0.1 dev
> vite dev


Forced re-optimization of dependencies

  VITE v4.0.4  ready in 3582 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
[vite-plugin-svelte-inspector] failed to find svelte-inspector: C:/Users/Espen/github/slick-portfolio-svelte/node_modules/@sveltejs/vite-plugin-svelte-inspector/src/runtime/load-inspector.js?v=9436a180
[vite-plugin-svelte-inspector] failed to find svelte-inspector: C:/Users/Espen/github/slick-portfolio-svelte/node_modules/@sveltejs/vite-plugin-svelte-inspector/src/runtime/Inspector.svelte?v=9436a180
20:47:12 [vite] ✨ new dependencies optimized: marked-gfm-heading-id, marked-mangle, prismjs, dompurify, marked, ...and 1 more
20:47:12 [vite] ✨ optimized dependencies changed. reloading
[vite-plugin-svelte-inspector] failed to find svelte-inspector: C:/Users/Espen/github/slick-portfolio-svelte/node_modules/@sveltejs/vite-plugin-svelte-inspector/src/runtime/load-inspector.js?v=540a001f
[vite-plugin-svelte-inspector] failed to find svelte-inspector: C:/Users/Espen/github/slick-portfolio-svelte/node_modules/@sveltejs/vite-plugin-svelte-inspector/src/runtime/Inspector.svelte?v=540a001f
20:49:58 [vite] hmr update /src/routes/education/+page.svelte
20:50:01 [vite] hmr update /src/routes/education/+page.svelte (x2)
20:50:03 [vite] hmr update /src/routes/education/+page.svelte (x3)
20:50:12 [vite] hmr update /src/routes/education/+page.svelte (x4)
20:50:25 [vite] hmr update /src/routes/education/+page.svelte (x5)
20:50:37 [vite] hmr update /src/routes/education/+page.svelte (x6)
20:50:49 [vite] hmr update /src/routes/education/+page.svelte (x7)
20:50:54 [vite] hmr update /src/routes/education/+page.svelte (x8)
20:50:55 [vite] hmr update /src/routes/education/+page.svelte (x9)
20:50:59 [vite] hmr update /src/routes/education/+page.svelte (x10)
20:51:01 [vite] hmr update /src/routes/education/+page.svelte (x11)
20:51:19 [vite] hmr update /src/routes/education/+page.svelte (x12)
20:51:30 [vite] hmr update /src/routes/education/+page.svelte (x13)
20:51:35 [vite] hmr update /src/routes/education/+page.svelte (x14)
20:51:36 [vite] hmr update /src/routes/education/+page.svelte (x15)
20:51:43 [vite] hmr update /src/routes/education/+page.svelte (x16)
20:51:46 [vite] hmr update /src/routes/education/+page.svelte (x17)
20:51:48 [vite] hmr update /src/routes/education/+page.svelte (x18)
20:51:51 [vite] hmr update /src/routes/education/+page.svelte (x19)
20:51:59 [vite] hmr update /src/routes/education/+page.svelte (x20)
20:52:17 [vite] hmr update /src/routes/education/+page.svelte (x21)
20:52:27 [vite] hmr update /src/routes/education/+page.svelte (x22)
20:52:29 [vite] hmr update /src/routes/education/+page.svelte (x23)
20:53:11 [vite] hmr update /src/routes/education/+page.svelte (x24)
20:53:25 [vite] hmr update /src/routes/+page.svelte, /src/lib/components/NavMenu/NavMenu.svelte
20:53:29 [vite] hmr update /src/routes/+page.svelte, /src/lib/components/NavMenu/NavMenu.svelte (x2)
20:53:34 [vite] hmr update /src/routes/+page.svelte, /src/lib/components/NavMenu/NavMenu.svelte (x3)
PS C:\Users\Espen\github\slick-portfolio-svelte>



# Start npm run dev