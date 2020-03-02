const { isDev } = require('../../utils/environment')

module.exports = {
  disableTranscoder: isDev,
  pipelines: isDev
    ? [
        {
          name: 'vp9',
          fileExtension: 'webm',
          maxWidth: 1280,
          maxHeight: 720,
          transcode: (chain) =>
            chain
              .fps(29.7)
              .videoCodec('libvpx-vp9')
              .noAudio()
              .outputOptions(['-movflags faststart']),
        },
        {
          name: 'h264',
          fileExtension: 'mp4',
          maxWidth: 1280,
          maxHeight: 720,
          transcode: (chain) =>
            chain
              .fps(29.7)
              .videoCodec('libx264')
              .noAudio()
              .outputOptions(['-movflags faststart']),
        },
      ]
    : [
        /**
         * Production configuration
         */
        {
          name: 'vp9',
          fileExtension: 'webm',
          maxWidth: 1920,
          maxHeight: 1080,
          transcode: (chain) =>
            chain
              .fps(29.7)
              .preset('slower')
              .videoCodec('libvpx-vp9')
              .videoBitrate(1000)
              .audioCodec('libvorbis')
              .audioBitrate(128)
              .audioChannels(2)
              .outputOptions([
                '-movflags faststart',
                '-pix_fmt yuv420p',
                '-crf 20',
                '-qscale 3',
              ]),
        },
        {
          name: 'h264',
          fileExtension: 'mp4',
          maxWidth: 1920,
          maxHeight: 1080,
          transcode: (chain) =>
            chain
              .fps(29.7)
              .preset('slower')
              .videoCodec('libx264')
              .videoBitrate(1000)
              .audioCodec('aac')
              .audioBitrate(128)
              .audioChannels(2)
              .outputOptions([
                '-movflags faststart',
                '-pix_fmt yuv420p',
                '-crf 20',
                '-qscale 3',
              ]),
        },
      ],
}

/*
[
        {
          name: 'vp9',
          fileExtension: 'webm',
          maxWidth: 1280,
          maxHeight: 720,
          transcode: (chain) =>
            chain
              .fps(29.7)
              .videoCodec('libvpx-vp9')
              .noAudio()
              .outputOptions(['-movflags faststart']),
        },
        {
          name: 'h264',
          fileExtension: 'mp4',
          maxWidth: 1280,
          maxHeight: 720,
          transcode: (chain) =>
            chain
              .fps(29.7)
              .videoCodec('libx264')
              .noAudio()
              .outputOptions(['-movflags faststart']),
        },
      ]
 */
