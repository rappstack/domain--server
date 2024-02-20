export type social_T = {
	name:social_media_T
	href:string
	active:boolean
	link_title:string
}
export type social_icons_T = {
	[social in social_media_T]:string
}
export type social_media_T =
	|'Github'
	|'Facebook'
	|'Instagram'
	|'LinkedIn'
	|'Mail'
	|'Twitter'
	|'Twitch'
	|'YouTube'
	|'WhatsApp'
	|'Snapchat'
	|'Pinterest'
	|'TikTok'
	|'CodePen'
	|'Discord'
	|'GitLab'
	|'Reddit'
	|'Skype'
	|'Steam'
	|'Telegram'
	|'Mastodon'
