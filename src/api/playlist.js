import request from '@/utils/request';

/**
 * @Date         : 2023-03-27 23:32:00
 * @description  : 获取歌单详情
 * @param         {*} id:
 * @return        {*}
 */
export const getPlaylistDetail = id => {
	return request({
		url: `/playlist/detail?id=${id}`,
		method: 'get',
	});
};

/**
 * @Date         : 2023-05-05 15:14:58
 * @description  : 收藏/取消收藏歌单
 * @param         {*} id:歌单id
 * @param         {*} t: 类型,1:收藏,2:取消收藏
 * @return        {*}
 */
export const playlistSubscribe = (id, t) => {
	return request({
		url: `/playlist/subscribe?t=${t}&id=${id}`,
	});
};

/**
 * @Date         : 2023-03-26 18:23:31
 * @description  : 分类歌单
 * @param         {*} before:分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
 * @param         {*} cat:歌单分类
 * @return        {*}
 */
export const getPlaylist = ({ before, cat }) => {
	return request({
		url: `/top/playlist/highquality?limit=35&before=${before}&cat=${cat}`,
		method: 'get',
	});
};
