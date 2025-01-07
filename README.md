# SKXYWTF-react-demo
http://localhost:5173// -> working on this site, Creating components and stuffs


## Installations and Run
1. Move to `/client` <br>
` cd client `
2. Install Packages <br>
`npm install`
3. Run the app <br>
`npm run dev`

## Structure
<pre>
    - /src (all code goes here)
        - /assets (for media, svgs, videos)
            - images (.png, .webp, .gif, .svg, .jpeg)
            - videos (.mkv, .mp4 etc)

        - /helpers (reusuable functions)

        - /Components (for reusuable components like SLIDERS, CARDS etc.)

        - /Pages (for each page create a folder that will resemble the actual path)
            - /page1
                - page1.tsx (page with tailwindcss)
                - page1.css (optional) 

        - main.tsx (no need to modify, other than for CONTEXT APIs)
        - App.tsx (implement REACT ROUTER)
        - index.css (styles on the body, see index,html)
        - App.css (for custom CSS classes, reusuable animation classes)

    - /public (used for build purpose)
    - index.html (base html file)
</pre>

### Get Reusuable Components at: https://reuse-components.vercel.app/
- root/components (dev folder)
