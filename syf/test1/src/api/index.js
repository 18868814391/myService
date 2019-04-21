import request from '@/utils/request'

export function register(params) { return request({ url: '/login/register.php', method: 'post', data: params }) }// 注册
export function loginIN(params) { return request({ url: '/login/login.php', method: 'post', data: params }) }// 登陆
export function levelGet(params) { return request({ url: '/login/level.php', method: 'post', data: params }) }// 权限
export function UploadTxt(params) { return request({ url: '/upload/fileUpload.php', method: 'post', data: params }) }// 文件上传
export function getFile(params) { return request({ url: '/upload/getFile.php', method: 'post', data: params }) }// 文件下载
export function UploadRichTxt(params) { return request({ url: '/upload/richTxtUpload.php', method: 'post', data: params }) }// 富文本上传
export function lightNovelList(params) { return request({ url: '/novel/lightNovelList.php', method: 'post', data: params }) }// 获取轻小说列表
export function getlightNovel(params) { return request({ url: '/novel/getNovel.php', method: 'post', data: params }) }// 获取轻小说内容
export function getheavyNovel(params) { return request({ url: '/novel/heavyNovelList.php', method: 'post', data: params }) }// 获取重小说章节
export function getMircleDetail(params) { return request({ url: '/novel/mircleDetail.php', method: 'post', data: params }) }// 获取重小说内容
