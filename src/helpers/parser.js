import EmojiConverter from "emoji-js";

export const parseTextToEmoji = (text) => {
  const emoji = new EmojiConverter();

  emoji.allow_native = true;
  const parsedText = emoji.replace_colons(text);
  // convert colons to unicode
  emoji.init_env(); // else auto-detection will trigger when we first convert
  emoji.replace_mode = "unified";
  emoji.allow_native = true;
  var output3 = emoji.replace_colons(text);

  return output3;
};

export const parseTextToLink = (text) => {
  const pattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text.match(pattern);
};
