fis.config.merge({
  roadmap: {
    domain: {
      // Add domain;
	  // TODO: domain;
      '**.*' : 'http://wxrd.appsearch.m.sogou.com/campaigns/wxdemo'
    }
  },

  project: {
    md5Length: 8,
    exclude: /^\/test\//i
  }
});
