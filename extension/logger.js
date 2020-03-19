const co = require('../custom/const');
const facebook = require('../facebook');
var encodeUrl = require('encodeurl')


function postLog(data) {
	postGGForm(co.POST_LOG_ID, co.POST_LOG_ENTRY1, data[1], co.POST_LOG_NAME1, co.POST_LOG_ENTRY2, data[0], co.POST_LOG_NAME2);
}

async function getIDName(id) {
	return new Promise((resolve, reject) => {
		facebook.getFbData(co.FB_PAGE_ACCESS_TOKEN, "/" + id, (data) => {
			if (!data.error) {
				resolve(encodeUrl(`${data.first_name} ${data.last_name}`));
			} else {
				reject(encodeUrl(`${data.first_name} ${data.last_name}`));
			}
		})
	});
}


async function postGGForm(id, entry, str, entry2, entry3 = null, str3 = null, entry4 = null) {	
	var data = "entry." + entry + "=" + str + "&entry." + entry2 + "=" + await getIDName(str);
	if (entry2 != null) {
		data += "&entry." + entry3 + "=" + str3 + "&entry." + entry4 + "=" + await getIDName(str3);
	}

	// Set up the request
	var requ = require('https').request({
		host: 'docs.google.com',
		port: '443',
		path: '/forms/d/e/' + id + '/formResponse',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length
		}
	});
	requ.write(data);
	requ.end();
}

module.exports = {
	postGGForm: postGGForm,
	postLog: postLog
};
