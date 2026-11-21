AJHC WEBSITE — GITHUB STARTER FILES

This folder contains the current AJHC website build and an initial Pages CMS configuration.

UPLOAD
1. Open the ajhc-website repository on GitHub.
2. Choose Add file > Upload files.
3. Extract this ZIP on your computer first.
4. Upload the CONTENTS of this folder (not the outer folder itself), preserving the assets folder and the hidden .pages.yml file.
5. Commit the upload.

IMPORTANT STATUS
- The website is a static prototype. Several areas are visual previews/placeholders.
- .pages.yml provides an initial Pages CMS content model for Journal articles and media.
- The CMS configuration is not yet fully connected to the public Journal display. Do not treat this as a completed publishing workflow or final production launch.
- Cloudflare Web Analytics was enabled in the Cloudflare dashboard; its change takes effect on the next deployment. Verify analytics after deploying.
- Do not change Squarespace DNS records until hosting and Google Workspace email have been tested.
- The sample article in content/articles is explicitly a placeholder and must not be published.

NEXT DEVELOPMENT STEPS
1. Verify the Pages CMS configuration against the live service.
2. Implement article rendering on the Journal page and test draft/publish workflow.
3. Test all navigation, forms, map, mobile layout and media.
4. Connect Cloudflare Pages to this GitHub repository and deploy a preview before production.
