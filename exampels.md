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
<hr>
