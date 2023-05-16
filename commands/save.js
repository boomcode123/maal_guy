const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  //downloads the input link
  data: new SlashCommandBuilder()
    .setName("save")
    .setDescription("responds to input hyperlink"),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};
