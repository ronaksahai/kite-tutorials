---
sidebar_label: AFK System
sidebar_position: 4
description: 'Setup an afk system for your server with Kite.'
pagination_prev: null
---

# AFK System with Kite

# 💌 Features
- Set an AFK status with a reason using the `/afk` command.
- Shows up a message every time an AFK user is mentioned.
- Automatically removes AFK status when the user sends a message.
- Ability to detect multiple AFK user mentions in a single message.

:::note
- *Reply messages do not count as message mentions.* (Kite currently does not support detecting mentions in replies)
- This means if an `afk` user is pinged using a reply, the mention won't be detected.
:::

## Pre-requisites
Before starting with command-building process :  
You need to make one variable from your **[Kite Dashboard](https://kite.onl/) > Stored Variables**  
- `afk` - this will handle all your users' data ( afk status and reason )
- This variable is **NOT** scoped.

## Credit Usage

| Trigger | Credit Usage |
| ------- | ------------ |
| Every message | **1 credit** per message |
| Every time a message is sent by an `afk` user  | **1 + 3 credits** = 4 credits in total |
| Every time a message mentions `afk` user(s) | **1 + 2 credits** = 3 credits in total |
| [/afk command](command.md) | **4 credits** |