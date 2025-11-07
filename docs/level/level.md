---
sidebar_label: Leveling System
sidebar_position: 3
description: 'Setup a full-fledged leveling system for your server with Kite.'
pagination_prev: null
---

import Mention from '@site/src/components/DiscordMention';

# Leveling System with Kite

#  💌 Features
- **Leaderboard** and ranking system
- **In-built cooldown system** for XP gain (no extra blocks needed!)
- **Level roles assignment**
- Level-up notifications

## How it works?
Every minute that you're messaging, you randomly gain between 15 and 25 XP (this can be changed).
To avoid spamming, earning XP is limited to once a minute per user.

The XP bar resets once the user reaches a new level but the total XP accumulated from all the previous levels remains.  

:::info  
You can calculate the **XP required to complete a level/reach next level** using the following formula:  
$XP = 5l^2 + 50l + 100$ , where $l =$ *current level*  
:::

In the server, you type <Mention link="rank">/rank</Mention> to see your rank and level.

## Pre-requisites
Before starting with command-building process :  
You need to make one variable from your **[Kite Dashboard](https://kite.onl/) > Stored Variables**  
- `levels` - this will handle all your users' data ( xp and levels )
- This variable is **NOT** scoped.

## Credit Usage
This system can be expensive in terms of credits, so it's recommended to use it only if you have a premium subscription.

| Trigger | Credit Usage |
| ------- | ------------ |
| Every message | **3 credits** per message |
| Every time a user is not on cooldown | **+1 credit** = 4 credits in total |
| Every time a user levels up | **+1 credit** = 5 credits in total |
| Every time a user reaches a level which has a role attached to it | **+1 credit** = 6 credits in total |
| [/rank command](rank.md) | **3 credits** |
| [/leaderboard command](leaderboard.md) | **4 credits** |

## FAQs
1. **Can I change the XP gain range?**  
   - Yes, you can change the XP gain range in the **Generate Random Number** block of the [Message Event Listener](listener.md).

2. **Is there a way to add/remove xp from users?**
    - Yes, but it is **not covered in this tutorial yet**. I might add it in future updates.  
    Till then, you can refer to [Modify command of the economy system](../economy/admin/modify.mdx) as it will mostly be similar to that.

3. **Does this support multiple servers?**
    - **The setup shown in this tutorial if for a single server.**  
    To support multiple servers, you can set the Stored Variable as **scoped** with the scope `{{guild.id}}`. Further, you will need separate event listeners for each server if you have level-roles (use **Event Filters** to specify the Guild ID).