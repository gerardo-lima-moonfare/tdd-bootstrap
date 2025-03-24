import * as assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {toRoman} from './to-roman.ts'

void describe('to-roman', () => {
  void describe('toRoman', () => {

    const testCases: [number, string][] = [
      // [1, 'I'],
      // [2, 'II'],
      // [3, 'III'],
      // [4, 'IV'],
      // [5, 'V'],
      // [6, 'VI'],
      // [7, 'VII'],
      // [8, 'VIII'],
      // [9, 'IX'],
      // [10, 'X'],
      // [11, 'XI'],
      // [12, 'XII'],
      // [13, 'XIII'],
      // [14, 'XIV'],
      // [15, 'XV'],
    ] as const

    for(const [input, expected] of testCases) {
      it(`returns ${expected} for ${input}`, () => {
        assert.equal(toRoman(input), expected)
      })
    }
  })
})
