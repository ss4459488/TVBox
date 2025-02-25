var rule = {
  title: '柒番',
  host: 'https://qifun.cc',
  url: '/label/fyclass/page/fypage.html',
  searchUrl: '/vodsearch/-------------.html?wd=**',
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
 // class_parse: '#side-menu li;a&&Text;a&&href;/(.*?).html',
 class_name:'动漫',
 class_url:'all',
  cate_exclude: '',
  play_parse: true,
  lazy: "js:\n  input = { parse: 1, url: input, js: '' };",
  double: true,
  推荐: '列表1;列表2;标题;图片;描述;链接;详情',
  一级: '.video-img-box;.title&&Text;img&&data-original;.label&&Text;a&&href',
  二级: {
    title: 'v.detail-info&&.h3-md&&Text',
    img: '图片链接',
    desc: '主要信息;年代;地区;演员;导演',
    content: '简介',
    tabs: '.swiper-slide',
    lists: '#playsx:eq(#id)&&a',
    tab_text: 'body&&Text',
    list_text: 'body&&Text',
    list_url: 'a&&href',
  },
  搜索: '.video-img-box;.title&&Text;img&&data-original;.label&&Text;a&&href',
}