const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    basePath: isProd ? "/codoprodotid.github.io" : "",
    assetPrefix: isProd ? "/codoprodotid.github.io/" : "",
    output: "export",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
