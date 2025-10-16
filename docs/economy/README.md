---
sidebar_label: 'Read me 📌'
sidebar_position: 0
---

import Emoji from '@site/src/assets/emoji.png';

# 💌 Features
- Leaderboard and ranking system
- Add, edit and remove shop items using commands itself!
- Add role requirements and stock limits to your shop roles.
- Add notes to purchase responses.

## Permissions

:::note
- Make sure your bot has **MANAGE SERVER** or **ADMINISTRATOR** permission.
- Your bot's role should be above the shop item roles or the bot won't be able to assign roles to users.
:::

## Pre-requisites
Before starting with command-building process :  
You need to make two variables from your **[Kite Dashboard](https://kite.onl/) > Stored Variables**  
- `economy` - this will handle your users data ( rank & balance )
- `shop` - this will handle your shop items' data

:::note Do the variables need to be scoped?
If you're using the economy system  
- **A.** *in only one server* - **NO**  
- **B.** *in multiple servers* - **YES**  

> In case **B** you'll have to use the scope `{{guild.id}}` with your variables.
:::

## Currency
The default currency used in this tutorial is "🪙".  
If you want to use a change the currency & use a custom emoji, you'll have to replace 🪙 in all the **CALCULATE VALUE** and **CREATE RESPONSE** blocks with you desired emoji.
- If you want to use a custom emoji, you'll have to use the markdown format.  
- To use default emojis as currency, just input the emoji as it is from your keyboard.  

*for e.g,*  
<img src={Emoji} className="inline-svg" /> , `"🪙"` -> `"<:shBoba:1273186196394348626>"`  
🌿, `"🪙"` -> `"🌿"`