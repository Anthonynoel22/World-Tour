export default {
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                discover: "./pages/discover.html",
                gallery: "./pages/gallery.html",
            },
        },
    },
};
