module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '35739e06c0204a76bd9526bf9561ba79',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '刘伟的博客',
  domain: 'liuw.fun',
  author: 'roostinghawk',

  // open graph metadata (optional)
  description: 'Just for fun',
  socialImageTitle: '',
  socialImageSubtitle: '',

  // social usernames (optional)
  twitter: null,
  github: 'roostinghawk',
  // 公众号，如果没有就不用填写
  wechatPublicName: '',
  wechatPublicURL: '',
  notionPublic: 'https://roostinghawk.notion.site/cbaa8269a2ce44bf84b67791a5c91e22',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'roostinghawk/awesome-nextjs-notion-blog',
  utterancesGitHubLabel: '博客评论',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // set null to remove from year
  copyRightFromYear: 2019,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/running': 'fcb5f7f7b1db4954b7e057d8ed7c7237',
    '/travel': '8b33691bfb334ff88390d3d84119454a'
  },
  showPageAsideSocials: true,
  footCounterList: [
    '6a76fdd9ec6d4ae2855aa790d620eec4',
    '651765de-6a0f-4a72-9f91-86f26381aef3'
  ]
}
