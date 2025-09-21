---
sidebar_label: Balance
sidebar_position: 2
---

import Match from '@site/src/assets/match.svg';
import Else from '@site/src/assets/else.svg';

# Balance command
*this command would allow users to check their balance (as well as others')*

![Demo](../../static/flows/ModifyDemo.gif)  

## 🛠️ Arguments
- **`user`**
    - Description : get the balance of this user
    - Type : **User**
    - Argument Required : **False** (this argument should be set as optional)

## 📝 Get Stored Variable
- Variable : **economy**
- Set Temporary Variable : `users`

## 🧮 Calculate Value
:::danger
**DO NOT CHANGE** anything that you don't understand.
:::
```go title="Expression"
let user_list = var('users') ?? [];

let target_user = arg('user') ?? user;

let user_data = find(user_list, .id == target_user.id);

user_data != nil ?
    let sorted_list = sortBy(user_list, .points, "desc");
    let rank = findIndex(sorted_list, .id == target_user.id);
        [
            "# " + (rank == 0 ? "`🥇`" : (rank == 1 ? "`🥈`" : (rank == 2 ? "`🥉`" : " #" + string(rank + 1)))),
            "- User : **" + target_user.username + "**",
            "- Points : `" + string(user_data.points) + "`"
        ]
:
            [
            "# `#0`" ,
            "- User : **" + target_user.username + "**",
            "- Points : `0`"
        ]
```

![flow](../../static/flows/modify.png)

## 💬 Create Response Message
- Click on **Edit Message**
- Add an embed
- In the description box, copy paste this :
```md title="Embed Description"
{{type(var('idk')) == "array" ? join(var('idk'), '\n') : var('idk')}}
```
- For the thumbnail, copy paste this :
```md title="Thumbnail URL"
{{(arg('user') ?? user).avatar_url}}
```