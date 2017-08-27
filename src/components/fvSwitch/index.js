import utility from '../../utility'
import template from './template.pug'
import style from './style.scss'
/* global process */

export default {
  props: {
    value: {
      default: false
    },
    onValue: {
      default: true
    },
    offValue: {
      default: false
    },
    required: {
      type: [Boolean, Function],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hammer: undefined,
      dirs: {
        off: process.env.DIRECTION === 'ltr' ? 'left' : 'right',
        on: process.env.DIRECTION === 'ltr' ? 'right' : 'left'
      }
    }
  },
  computed: {
    fvValidate () {
      if (this.required === true) {
        return this.value === this.onValue
      } else if (typeof this.required === 'function') {
        return this.required()
      }
      return true
    }
  },
  watch: {
    value () {
      this.setStructure()
    }
  },
  created () {
    this.setStructure()
    this.hammer = utility._dependencies.hammer
  },
  mounted () {
    this.initHammer()
  },
  methods: {
    toggle () {
      if (!this.disabled) {
        this.$emit('input', this.value === this.onValue ? this.offValue : this.onValue)
      }
    },
    on () {
      if (!this.disabled) {
        this.$emit('input', this.onValue)
      }
    },
    off () {
      if (!this.disabled) {
        this.$emit('input', this.offValue)
      }
    },
    setStructure () {
      if ([this.offValue, this.onValue].indexOf(this.value) === -1) {
        this.$emit('input', this.offValue)
      }
    },
    keydown (event) {
      switch (event.which) {
      case 13: case 32: // enter, space
        event.preventDefault()
        this.toggle()
        break
      }
    },
    initHammer () {
      if (this.hammer) {
        const mc = new this.hammer.Manager(this.$el, {
          recognizers: [
            [this.hammer.Swipe, { direction: this.hammer.DIRECTION_HORIZONTAL }]
          ]
        })
        mc.on(`swipe${this.dirs.on}`, this.on)
        mc.on(`swipe${this.dirs.off}`, this.off)
      }
    }
  },
  style,
  render: template.render
}
