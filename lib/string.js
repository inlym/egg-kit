'use strict'

const crypto = require('crypto')

/**
 * 生成指定长度的随机英文字符串
 * @param {number} [length] 生成的英文随机字符串长度
 * @returns {string}
 * @since 0.0.2
 */
function randomString(length) {
  // length 为 0 或未定义，直接返回空字符串
  if (!length) {
    return ''
  }

  const buf = crypto.randomBytes(length * 2)

  const str = buf.toString('base64').replace(/\+/gu, '').replace(/\//gu, '').replace(/[=]/gu, '')

  return str.slice(0, length)
}

module.exports = {
  randomString,
}
