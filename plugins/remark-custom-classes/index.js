module.exports = {
  mutateSource: ({ markdownNode }) => {
    return new Promise((resolve, reject) => {
      try {
        console.log(markdownNode)

        // markdownNode.internal.content = emoji[emojiConversion](
        //   markdownNode.internal.content,
        // );
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  },
}
