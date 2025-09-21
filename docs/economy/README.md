---
sidebar_label: '📌 Read me'
sidebar_position: 0
---

# 💌 Features
- Leaderboard and ranking system
- Add, edit and remove shop items using commands itself!
- Add role requirements and stock limits to your shop roles.
- Add notes to purchase responses.

:::info 📌 Pre-requisites
Before starting with command-building process :  
You need to make two variables from your **[Kite Dashboard](https://kite.onl/) > Stored Variables** 
- `economy` - this will handle your users data ( rank & balance )
- `shop` - this will handle your shop items' data
:::
:::note Do the variables need to be scoped ?
**A.** *If you're using the economy system in only one server* - **NO**  
**B.** *If you're using the economy system in multiple servers* - **YES**  
> In case **B** you'll have to use the scope `{{guild.id}}` with your variables.
:::