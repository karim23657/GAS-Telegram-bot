//توکن ربات ربات رو اینجا بزار
const token = '12345678:Ahjoiup555989jhhhjghffuystebjk0';
//ایدی عددی ادمین یا توسعه دهنده ی ربات
const adminId = 193287044;


//درخواست های 
//POSt
// ارسالی به سرور به این فانکشن می آیند
function doPost(e) {
    try {
			// Make sure to only reply to json requests
			if(e.postData.type == "application/json" ) {
				
				// Parse the update sent from Telegram
				var update = JSON.parse(e.postData.contents);
				
				//پیام های معمولی که به ربات می آیند
				if(update.message !== undefined){
					
					//برای مشاهده ی پاسخ ارسال شده از سرور تلگرام این قسمت را از حالت 
					//کامنت خارج کن
					/*
					tgmsg('sendMessage' , {
						"chat_id": update.message.chat.id,
						"text": JSON.stringify(update,undefined,2)
						})
					*/
					
					//کار کردن روی پاسخ کاربر به ربات
					if(update.message.entities !== undefined){
						//اگر کامندهای ربات ارسال شده
						if(update.message.entities['0'].type=='bot_command'){
							//کامند ارسالی
							var cmnd = update['message']['text'];
							
							
							if(cmnd=='/start'){
								tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": 'به ربات خوش آمدید'+'\n  '+update['message']['from']['first_name']+' عزیز'+'\n'+
									        '/help'									
									});
							}else if(cmnd=='/help' || cmnd=='help' || cmnd=='h'){
								tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": 'کامند های ربات:'+'\n\n'+
									        '/start'+'\n'+
											'/help  :دریافت دوباره ی همین پیام'+'\n'+
											'/id  : دریافت آیدی عددی خودتان'+'\n'+
											'/prayers : دریافت اوقات شرعی به افق تهران'
									});
							}else if(cmnd=='/id' || cmnd=='id'){
								tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": update.message.from.id
									});
							}else if(cmnd=='/date' || cmnd=='date'){
								var date_format = new Intl.DateTimeFormat("fa", {year: "2-digit",month: "numeric",day: "numeric",hour: "numeric",minute: "numeric"});
								var faDate = new Intl.DateTimeFormat("fa", {   weekday: "long",   year: "numeric",   month: "long",   day: "numeric"  });
								var fhmt = new Intl.DateTimeFormat("fa", {    hour: "numeric",   minute: "numeric" });
								tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": faDate.format(Date.now())+ '\n'+fhmt.format(Date.now())+ '\n'+date_format.format(Date.now())
									});
							}else if(cmnd=='/prayers' || cmnd=='prayers'|| cmnd=='نماز'){
								var responselk = UrlFetchApp.fetch(	'https://prayer.aviny.com/api/prayertimes/1');
								var pray=JSON.parse(responselk.getContentText());
								tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": "امروز🇮🇷🇮🇷🇮🇷:"+pray['Today']+" \n الیوم:                                "+
									        pray['TodayQamari']+" \n🔆🔆 اذان صبح🔆🔆:          "+
											pray['Imsaak']+"  \n طلوع آفتاب:                                 "+
											pray['Sunrise']+ "\n 🔆اذان ظهر:🔆                         "+
											pray['Noon']+"  \n 🌅🌅 اذان مغرب: 🌅🌅       "+
											pray['Maghreb']+" \n🌅🌅  غروب آفتاب🌅🌅      "+
											pray['Sunset']+" \n نیمه شب شرعی :                    "+
											pray['Midnight']+"  \n\n🕑🕑🕑"
											
									} );
							}else if(cmnd=='/setwebhook'){
								if(update['message']['text']!= undefined){
								var result = tgmsgv3('setWebhook' , {
									"url": update['message']['reply_to_message']['text']
									} )
								tgmsg('sendMessage' , {
								"chat_id": update.message.chat.id,
								"text": JSON.stringify(result,undefined,2)
								})
								}else{
									tgmsg('sendMessage' , {
										"chat_id": update.message.chat.id,
										"text": 'نگر تا چه کاری همان بدروی       سخن هر چه گویی همان بشنوی'+'\n\n'+'باید به لینک سرورت ریپلای کنی'
										})
								}
							}
						
						//اگر لینک ارسال شده
						}else  if(update.message.entities['0'].type=='url'){
							tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": 'لینک شما'+'\n  '+update['message']['text'] 
									});
						}
					
					//دیگر انواع پیام	
					}else{
						
						//اگر متن داشت
						if(update['message']['text']!= undefined){
							if(update['message']['text']==='سلام'){
								tgmsg('sendMessage' , {
									"chat_id": update.message.chat.id,
									"text": 'سلام گل🌹🌺🌸'
									});
							
						    }else{
								
								tgmsg('sendMessage' , {
								"chat_id": update.message.chat.id,
								"text": update['message']['text'] 
								})
							}
						}else{
							
								
							tgmsg('sendMessage' , {
								"chat_id": update.message.chat.id,
								"text": JSON.stringify(update,undefined,2)
								})
						}
					}
					
				
				
				//پیام هایی که به صورت اینلاین به ربات می آیند
				}else if(update.callback_query != undefined){
					var data = update.callback_query.data;
					
					
					//ارسال محتوای دریافتی 
					tgmsg('sendMessage' , {
						"chat_id": update.callback_query.from.id,
						"text": 'inline data : '+data
						})
					
					tgmsg('sendMessage' , {
						"chat_id": update.callback_query.from.id,
						"text": JSON.stringify(update,undefined,2)
						})
					
				}
			}
	} catch (e) {
	//ارسال خطا ها به رئیس ربات
      tgmsg('sendMessage' , {
	      
	      "chat_id": adminId,
	      "text": '😡😡❌🚫⛔️📛❌‼️❌❌⚠️ err'+'\n\n'+e.message
	    } )
    }
	  }



function tgmsg(method , data){
    var options = {
	    'method' : 'post',
	    'contentType': 'application/json',
	    'payload' : JSON.stringify(data)
	  };
    var responselk = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/' + method, options);
  }
  
  
function tgmsgv3(method , data){
    var options = {
	    'method' : 'post',
	    'contentType': 'application/json',
	    'payload' : JSON.stringify(data)
	  };
    var responselk = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/' + method, options);
    return JSON.parse(responselk.getContentText());
  }
  
  
  
function setWebhook(){
	
	//لینک سرور رو بزار و فانکشن رو اجرا کن
	var serverUrl=""
	var result = tgmsgv3('setWebhook' , {
									"url": serverUrl
									} )
	Logger.log(result)
}
