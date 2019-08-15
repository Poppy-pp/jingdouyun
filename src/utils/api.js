import requestAll from './request' // 此处，引入存放对promise处理的文件
import hexMD5 from './md5'

const apiUrl = 'https://www.knoworth.com/jdy/' 
//const apiUrl = 'http://localhost/'

const signKey = "abcdefg1234567"
 
class api {
 
	getActivityType(){
		let data = {
			method: "getActivityType",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
 
 	getActivityPeopleNumber(){
		let data = {
			method: "getActivityPeopleNumber",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
     getActivityBudget(){
		let data = {
			method: "getActivityBudget",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getActivityRequirement(){
		let data = {
			method: "getActivityRequirement",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getRegion(city){
		let data = {
			method: "getRegion",
            activity_city: city,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    sendSms(mobile){
		let data = {
			method: "sendSms",
            mobile: mobile,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
	
	login(mobile,sms){
		let data = {
			method: "login",
            mobile: mobile,
			sms: sms, 
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceType(){
		let data = {
			method: "getSpaceType",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceTypeSearchItem(){
		let data = {
			method: "getSpaceTypeSearchItem",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getMySpaceOrder(wechat_id){
		let data = {
			method: "getMySpaceOrder",
            userInfo: wechat_id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    addMySpaceOrder(uid,area,type,date,num,price,phone,sms){
		let data = {
			method: "addMySpaceOrder",
            userInfo: uid,
            region_requirement: area,
            activity_people_number: num,
            activity_budget: price,
            space_type: type,
            mobile: phone,
            activity_time_from: Date.parse(date),
            activity_time_to: Date.parse(date),
            sms: sms,
		}
        
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    delMySpaceOrder(space_order_id){
		let data = {
			method: "delMySpaceOrder",
            space_order_id: space_order_id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getActivityListBanner(){
		let data = {
			method: "getActivityListBanner",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getActivityListIntroduce(id){
		let data = {
			method: "getActivityListIntroduce",
            activity_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
   
    getCaseList(){
		let data = {
			method: "getCaseList",
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
   
    getCaseListInfo(id){
		let data = {
			method: "getCaseListInfo",
            activity_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getCaseListIntroduce(id){
		let data = {
			method: "getCaseListIntroduce",
            activity_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceList(city){
		let data = {
			method: "getSpaceList",
            activity_city: city,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListSearch(name,city,region,type,people_from,people_to,area_from,area_to,price_from,price_to){
		let data = {
			method: "getSpaceListSearch",
            space_name: name,
            activity_city: city,
            activity_region: region,
            space_type_list: type,
            people_number_from: people_from,
            people_number_to: people_to,
            space_area_from: area_from,
            space_area_to: area_to,    
            space_price_from: price_from,
            space_price_to: price_to,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListHot(city){
		let data = {
			method: "getSpaceListHot",
            activity_city: city,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListFlag(city){
		let data = {
			method: "getSpaceListFlag",
            activity_city: city,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListKeep(wechat_id){
		let data = {
			method: "getSpaceListKeep",
            userInfo: wechat_id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    addSpaceListKeep(wechat_id,id){
		let data = {
			method: "addSpaceListKeep",
            userInfo: wechat_id,
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListHistory(wechat_id){
		let data = {
			method: "getSpaceListHistory",
            userInfo: wechat_id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    addSpaceListHistory(wechat_id,id){
		let data = {
			method: "addSpaceListHistory",
            userInfo: wechat_id,
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListImages(id){
		let data = {
			method: "getSpaceListImages",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListTags(id){
		let data = {
			method: "getSpaceListTags",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListLargeInfo(id){
		let data = {
			method: "getSpaceListLargeInfo",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListLargeInfo(id){
		let data = {
			method: "getSpaceListLargeInfo",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}    
    
    getSpaceListAddr(id){
		let data = {
			method: "getSpaceListAddr",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSpaceListIntroduce(id){
		let data = {
			method: "getSpaceListIntroduce",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
	
	getBulletinList(id){
		let data = {
			method: "getBulletinList",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSiteList(id){
		let data = {
			method: "getSiteList",
            space_list_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSiteListDetailAddr(id){
		let data = {
			method: "getSiteListDetailAddr",
            space_list_place_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSiteListDetailInfo(id){
		let data = {
			method: "getSiteListDetailInfo",
            space_list_place_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSiteListDetailMoreList(id){
		let data = {
			method: "getSiteListDetailMoreList",
            space_list_place_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
    
    getSiteListDetailBanner(id){
		let data = {
			method: "getSiteListDetailBanner",
            space_list_place_id: id,
		}
        var sign = hexMD5.signature(data, signKey)
        data["sign"] = sign
		return requestAll.postRequest(apiUrl + 'api/i.php', data);
	}
}
 
//暴露接口
export default {
	api:api
}
