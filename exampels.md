# Main functions

There are two man functions in this code
1. ``` tgmsg(method , data) ```
2. ``` tgmsgv3(method , data) ```

#### tgmsg : send data to telegram api and returns nothing.
#### tgmsgv3 : send data to telegram api and returns telegram api response.

You can use `tgmsgv3` for some telegram methods that you need to do something with telegram api response.
#### note: There is no problem to use `tgmsgv3` for all of your requests and nothing bad will happen.


# Telegram methods

In this section I'm showing you some practical exampels that shows how to use telegram official api method.
All exampels are based on [Telegram Bot API Documentation](https://core.telegram.org/bots/api).

## [sendMessage](https://core.telegram.org/bots/api#sendmessage)

This table copied from [Telegram Bot API Documentation](https://core.telegram.org/bots/api).I'm going to showyou how to use this.

>| Parameter                   | Type                                                                             | Required | Description                                                                                                                                                                    |
>|-----------------------------|----------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
>| chat_id                     | Integer or String                                                                | Yes      | Unique identifier for the target chat or username of the target channel (in the format @channelusername)                                                                       |
>| text                        | String                                                                           | Yes      | Text of the message to be sent, 1-4096 characters after entities parsing                                                                                                       |
>| parse_mode                  | String                                                                           | Optional | Mode for parsing entities in the message text. See formatting options for more details.                                                                                        |
>| entities                    | Array of MessageEntity                                                           | Optional | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode                                                           |
>| disable_web_page_preview    | Boolean                                                                          | Optional | Disables link previews for links in this message                                                                                                                               |
>| disable_notification        | Boolean                                                                          | Optional | Sends the message silently. Users will receive a notification with no sound.                                                                                                   |
>| protect_content             | Boolean                                                                          | Optional | Protects the contents of the sent message from forwarding and saving                                                                                                           |
>| reply_to_message_id         | Integer                                                                          | Optional | If the message is a reply, ID of the original message                                                                                                                          |
>| allow_sending_without_reply | Boolean                                                                          | Optional | Pass True, if the message should be sent even if the specified replied-to message is not found                                                                                 |
>| reply_markup                | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | Optional | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

#### egxample 1 :

Send simpel text message:

```javascript
tgmsg('sendMessage' , {
    "chat_id": 1234567,
    "text": "Simpel text Message"
    }
);
```

Send text message with custom parse_mode:

For detailed description about formatting options [see here](https://core.telegram.org/bots/api#formatting-options)

```javascript
tgmsg('sendMessage' , {
    "chat_id": 1234567,
    "text": "Simpel text Message with *bold text and ||spoiler||",
    "parse_mode": "MarkdownV2"
    }
);
```


```javascript
tgmsg('sendMessage' , {
    "chat_id": 1234567,
    "text": "Simpel text Message with <b>bold</b> text and <a href="tg://user?id=123456789">inline mention of a user</a>",
    "parse_mode": "HTML"
    }
);
```


```javascript
tgmsg('sendMessage' , {
    "chat_id": 1234567,
    "text": "Simpel text Message with *bold text* text and `inline fixed-width code`",
    "parse_mode": "Markdown"
    }
);
```

Send text message with InlineKeyboard:

```javascript
tgmsg('sendMessage' , {
    "chat_id": 1234567,
    "text": "Simpel text Message with InlineKeyboard",
    "reply_markup": JSON.stringify({
        inline_keyboard: [
            [
                {text:'❌ نه',callback_data:'no'},
                {text:'✔️ بله',callback_data:'Yes'}
            ],
            [
            {text:'🔨 لغو',callback_data:'cancel'}
            ]
        ]
       } )
    }
);
```

## [sendPhoto](https://core.telegram.org/bots/api#sendphoto)

```javascript		
tgmsg('sendPhoto' , {
	"chat_id":  1234567,
	"photo": "https://user-images.githubusercontent.com/64953489/160371562-a34789d1-ca1b-4fe2-911b-1f397a5964ca.png",
	"caption":"Visit my repo : [GAS-Telegram-bot](https://github.com/karim23657/GAS-Telegram-bot/tree/main)",
	}
);
```

For sending image from file or from web use this new function:

```javascript           
function tgmsgv4(method , data){
    var options = {
	    method : 'post',
      muteHttpExceptions: true,
	    payload : data
	  };
    var responselk = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/' + method, options);
    return JSON.parse(responselk.getContentText());
  }
```

and code will be this:

```javascript           
  var url="https://i.stack.imgur.com/cFGVN.jpg";
  var file=UrlFetchApp.fetch(url).getBlob()
  var f=tgmsgv4('sendDocument' , {
	      
	      chat_id: "565526033",
              photo:file,
	      caption: 'sampel photo'
	    } );
  Logger.log(f);
```

## [sendDocument](https://core.telegram.org/bots/api#senddocument)

For sending Document from file or from downloaded file use this `tgmsgv4` function I mentioned in [sendPhoto](#sendphoto):

```javascript      
  var url="https://i.stack.imgur.com/cFGVN.jpg";
  var file=UrlFetchApp.fetch(url).getBlob()
  var f=tgmsgv4('sendDocument' , {
	      
	      chat_id: "566526033",
              document:file,
	      caption: 'sampel Document'
	    } );
  Logger.log(f);
  ```


#### Send text as .txt file:

```javascript   
function newBlobWithCharset_(data, contentType, name, charset){
  return Utilities.newBlob('')
  .setDataFromString(data, charset)
  .setName(name)
  .setContentType(contentType);
}
var myString = "sometext"+'\n\n'+`شما نمی خواهد در واقع حتی نیاز به یک مجموعه نویسه. 'text/plain' ممکن است نادرست هر چند به دلیل آن را نیز نه واقعا متن.

حتی اگر آن را سازگار با, ascii, utf-8, latin1 (به عنوان ruakh ذکر شده) شما فقط باید درمان آن را به عنوان یک فایل باینری.

به روز رسانی `;
  var file= newBlobWithCharset_(myString, 'text/plain', 'myfile.txt', 'UTF-8');
  var f=tgmsgv4('sendDocument' , {
	      
	      chat_id: "5605626033",
              document:file,
	      caption: 'sampel doc'
	    } );
  Logger.log(f);
  
  ```
