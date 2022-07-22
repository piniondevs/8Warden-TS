# Version 1.0
# With beta commands
import discord
import random
from discord.ext import commands, tasks
from discord import Member
from discord.ext.commands import has_permissions, MissingPermissions
from itertools import cycle
import asyncio
from asyncio import gather

# command prefix
# client = commands.Bot(command_prefix = ".")

# # start
# @client.event
# async def on_ready():
# 	print('Bot is ready')


# # welcomer
# @client.event
# async def on_member_join(member):
# 	for channel in member.server.channels:
# 		if str(channel) == "general":
# 			await client.send_message(f"""Welcome to the server {member.mention} """)


# # slow Mode
# @client.command()
# @has_permissions(manage_messages=True)
# async def slowmode(ctx, amount):
#     try:
#         await ctx.channel.edit(reason='Bot Slowmode Command', slowmode_delay=int(amount))
#     except discord.Errors.Forbidden:
#         await ctx.send('I do not have the permission to do this, please try again')


# mute
@client.command()
@commands.has_permissions(ban_members=True)
async def mute(ctx, member: discord.Member=None):
    if not member:
        await ctx.send("Please specify a member")
        return
    role = discord.utils.get(ctx.guild.roles, name="muted")
    await member.add_roles(role)
@mute.error
async def mute_error(ctx, error):
    if isinstance(error, commands.CheckFailure):
        await ctx.send(f'`You do not have necessary permissions`')
# unmute 
@client.command()
@commands.has_permissions(ban_members=True)
async def unmute(ctx, member: discord.Member=None):
    if not member:
        await ctx.send("Please specify a member")
        return
    role = discord.utils.get(ctx.guild.roles, name="muted")
    await member.remove_roles(role)
@mute.error
async def unmute_error(ctx, error):
    if isinstance(error, commands.CheckFailure):
        await ctx.send(f'`You do not have necessary permissions`')


# # kick 
# @client.command()
# @commands.has_permissions(ban_members=True)
# async def kick(ctx, member:discord.Member = None):
#     if not member:
#         await ctx.send("Please specify a member")
#         return
#     await member.kick()
#     await ctx.send(f"{member.mention} got yeeted")
# @kick.error
# async def kick_error(ctx, error):
#     if isinstance(error, commands.CheckFailure):
#         await ctx.send(f'`You do not have necessary permissions`')


# # ban
# @client.command()
# @commands.has_permissions(ban_members=True)
# async def ban(ctx, member:discord.Member = None):
#     if not member:
#         await ctx.send("Please specify a member")
#         return
#     await member.ban()
#     await ctx.send(f"{member.mention} vanished ?????")
# @ban.error
# async def ban_error(ctx, error):
#     if isinstance(error, commands.CheckFailure):
#         await ctx.send(f'`You do not have necessary permissions`')
# # unban
# @client.command()
# @has_permissions(ban_members=True)
# async def unban(ctx, member):
# 	banned_users = await ctx.guild.bans()
# 	member_name, member_discriminator = member.split('#')\

# 	for ban_entry in banned_users: 
# 		user = ban_entry.user
# 		if (user.name, user.discriminator) == (member_name, member_discriminator): 
# 			await ctx.guild.unban(user)
# 			await ctx.send(f'Unbanned {user.mention}')
# 			return


# # clear
# @client.command()
# @has_permissions(manage_messages=True)
# async def clear(ctx, amount = 5):
# 	await ctx.channel.purge(limit=amount)

# # help *gonna add more stuff after bot is finished*
# @client.command(aliases = ['halp'])
# async def h(ctx):
# 	await ctx.send(f'--------X-------- \nUse commands with "." \n--Misc--:\navatar- Use this with someones @profile and it will show their dp\n8ball- Use command with yes or no a question. \ncoinflip- Prints heads or tails \nrps- Use it with Rock or Paper or Scissors \np- Use command to check latency. \n--MODERATOR:-- \nmute-Needs Role with BanMember Perms, Mutes user. \nunmute- Needs Role with BanMember Perms, Unmutes user. \nclear- Needs Role with BanMember Perms, Use Clear with a number to delete messages according to the number. \nban- Needs Role with BanMember Perms, Use ban with with @personyouwanna ban. \nunban- Needs Role with BanMember Perms, Use this command with the username and identifier which is # number (example:tahlil#6969) \nkick- Needs Role with BanMember Perms, Use it by kick @useryouwannakick. \nslowmode- Needs role with ManageMessages perm, Use with a number representing time example(slowmode 3) slows down chat at 3 seconds interval and users can send messages at 3 second pauses \n--Others--: \nsendDM- Use like this (.sendDM @reciever yourmessage) \nincoDM- Same thing as send dm but anonymous\nv- Shows the version of the bot \na- Shows the author. \n--------X--------')


# # ping
# @client.command(aliases = ['pIng','Ping', 'PiNg', 'pINg', 'pinG', 'PING', 'piNg', 'PIng', 'piNG', 'p'])
# async def _ping(ctx):
# 	await ctx.send(f'{round(client.latency * 1000)}ms')


# # 8ball
# @client.command(aliases = ['8ball', 'eightball', 'EightBall', 'eightBall', 'Eightball','8b'])
# async def _8ball(ctx, *, question):
# 	responses = [   'It is certain.',
# 			'It is decidedly so.',
# 			'Without a doubt.',
# 			'Yes definetly.',
# 			'You may rely on it.',
# 			'As i see it yes.',
# 			'Most likely.',
# 			'Outlook good.',
# 			'Yes.',
# 			'Sign points to yes.',
# 			'Reply hazy, try again.',
# 			'Ask again later.',
# 			'Better not tell you right now.',
# 			'Cannot predict.',
# 			'Concentrate and ask again.',
# 			'Dont count on it.',
# 			'My reply is no.',
# 			'My sources say no.',
# 			'Outlook is not so good.',
# 			'MMMMMMMMMMMMMMMMMMMMMMMMM.'   ]
# 	await ctx.send(f'Question: {question}\nAnswer: {random.choice(responses)}')


# # coinflip
# @client.command()
# async def coinflip(ctx):
# 	coinside = ['Heads', 'Tails']
# 	randcoin = random.choice(coinside)
# 	await ctx.send(randcoin)


# #rps
# @client.command()
# async def rps(ctx, user_choice):
#     rpsGame = ['rock', 'paper', 'scissors']
#     if user_choice == 'rock' or 'paper' or 'scissors':
#         await ctx.send(f'Choice: `{user_choice}`\nBot Choice: `{random.choice(rpsGame)}`')
#     elif user_choice != 'rock' or 'paper' or 'scissors':
#         await ctx.send('**Error** This command only works with rock, paper, or scissors.')


# # author
# @client.command(aliases = ['a'])
# async def _author(ctx):
# 	await ctx.send(f'Coded and developed by Tahlil (tahlil#3239)')


# # version
# @client.command(aliases = ['v'])
# async def _version(ctx):
# 	await ctx.send(f'Warden Version 1.0')


# # avatar
# @client.command()
# async def avatar(ctx, member: discord.Member):
# 	show_avatar = discord.Embed(color = discord.Color.dark_blue())
# 	show_avatar.set_image(url='{}'.format(member.avatar_url))
# 	await ctx.send(embed=show_avatar)


# dm senders
@client.command()
async def sendDM(ctx, member: discord.Member, *, content):
    channel = await member.create_dm() 
    await channel.send(f"**{ctx.message.author} said:** {content}")
# anonymous dm
@client.command()
async def incogdm(ctx, member: discord.Member, *, content):
    channel = await member.create_dm() 
    await channel.send(content)


# client id 
client.run('TOKEN HERE')