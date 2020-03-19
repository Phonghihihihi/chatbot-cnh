module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '35c8f54940dab47e462e09eae9b566df',
	FB_PAGE_VERIFY_TOKEN : 'phonglon', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAG7WfEhGK0BADqxAYZAAxnVMGZCE6qpLBqLZCsM9rCiqTxKnDQ9msX7ZCPEzUXHctcM1W5TcNHKZAqD6CrfkZBPwNA5ZCxj4wIDNuZAZC5TZCwP05Br1SzckdpMzCetUQppZAFOxzSEcintxwVMIgQ7ueSua4Fm81oNz0Tx1iRKqWrFbFGAiiZARZACENIx7QV0fALIZD',

	//HEROKU STUFFS
	APP_NAME : 'lienhachatbot-public',
	HEROKU_API_KEY : '559dbf6b-bc03-4182-8da4-4b2e4cea8d68',
	KEEP_APP_ALWAYS_ON : true, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb://admin:phonglon@lienhachatbot-public-shard-00-00-ozbw4.mongodb.net:27017,lienhachatbot-public-shard-00-01-ozbw4.mongodb.net:27017,lienhachatbot-public-shard-00-02-ozbw4.mongodb.net:27017/test?ssl=true&replicaSet=lienhachatbot-public-shard-0&authSource=admin&retryWrites=true&w=majority',

	//ANALYTICS,
	HAS_POST_LOG : true,
	POST_LOG_ID : '1FAIpQLSdHyO2hsGC_r605HhJEXlyhexT7yy2Mp9mJSUdd5i1V9sU5Dg',
	POST_LOG_ENTRY1 : '1489417375',
	POST_LOG_ENTRY2 : '377087959',
	POST_LOG_NAME1: '1408499108',
	POST_LOG_NAME2: '194991995',

	//GOOGLE FORMS
	REPORT_LINK : "https://forms.gle/MYHdYDjoSyjZ34jLA",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 7, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "phonglon" //password để login vào trang admin
};
