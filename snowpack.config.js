/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: '',
    out: 'docs',
    // put the meta snowpack build files under snowpack instead of _snowpack since Github special-cases underscore prefixed folders
    metaUrlPath: 'snowpack'
  },
}
