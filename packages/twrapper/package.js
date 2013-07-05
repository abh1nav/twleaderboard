Package.describe({
    summary: "Wrapper for Twit"
});

Npm.depends({twit: "1.1.8"});

Package.on_use(function (api) {
    api.add_files("twrapper.js", "server");
});