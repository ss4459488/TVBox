var rule = {
  title: '修罗影视',
  host: 'https://v.xlys.ltd.ua',
  url: '/s/all/fypage?type=fyclass',
  searchUrl: '',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  filter: '',
  filter_url: '',
  filter_def: {},
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  timeout: 5000,
  //class_parse: '#side-menu li;a&&Text;a&&href;/(.*?).html',
  class_name:'电影&电视剧',
  class_url:'0&1',
  cate_exclude: '',
  play_parse: true,
  lazy: "js:\n  input = { parse: 1, url: input, js: '' };",
  double: true,
  推荐: '列表1;列表2;标题;图片;描述;链接;详情',
  一级: '.col-lg-8;.mb-0&&Text;img&&src;p&&Text;a&&href',
  二级: {
    title: '.d-sm-block&&Text',
    img: '.col-md-auto&&img&&src',
    desc: '主要信息;年代;地区;演员;导演',
    content: '.card-body&&Text',
    tabs: '',
    lists: '#play-list&&.d-flex&&a',
    tab_text: 'body&&Text',
    list_text: 'a&&Text',
    list_url: 'a&&href',
  },
  搜索: '列表;标题;图片;描述;链接;详情',
}