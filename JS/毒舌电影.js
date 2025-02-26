//网站：https://www.dushe1.app
 //      https://www.dushe2.app 
  //     https://www.dushe3.app

var rule = {
  title: '毒舌电影',
  host: 'https://www.dushe1.app',
  url: '/show/fyclass-----1-fypage.html',
  searchUrl: 'https://www.dushe1.app/search?k=**',
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
  class_parse: '.menu-item:lt(6);a&&Text;a&&href;/(\\d+).html',
  cate_exclude: '',
  play_parse: true,
  lazy: "js:\n  input = { parse: 1, url: input, js: '' };",
  double: true,
   图片替换:'https://www.dushe1.app=>https://vres.wbadl.cn',
  推荐: '.module-item;img&&title;img&&data-original;.v-item-bottom&&Text;a&&href',
  一级: '.module-item;img&&title;img&&data-original;.v-item-bottom&&Text;a&&href;.v-item-top-left&&Text',
  二级: {
    title: '.detail-pic&&img&&alt',
    img: '.detail-pic&&img&&data-original',
    desc: '主要信息;年代;地区;演员;.detail-info-row-main&&a&&Text',
    content: '.detail-desc&&p&&Text',
    tabs: '.source-box&&a',
    lists: '.episode-list:eq(#id)&&a',
    tab_text: '.source-item-label&&Text',
    list_text: 'a&&Text',
    list_url: 'a&&href',
  },
  搜索: '.search-result-list&&a;.search-result-item-pic&&img:eq(1)&&title;.search-result-item-pic&&img:eq(1)&&data-original;.tags&&Text;a&&href',
}