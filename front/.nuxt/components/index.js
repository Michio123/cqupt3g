export const CampusSide = () => import('../../components/CampusSide.vue' /* webpackChunkName: "components/campus-side" */).then(c => wrapFunctional(c.default || c))
export const Comment = () => import('../../components/Comment.vue' /* webpackChunkName: "components/comment" */).then(c => wrapFunctional(c.default || c))
export const CommentChild = () => import('../../components/CommentChild.vue' /* webpackChunkName: "components/comment-child" */).then(c => wrapFunctional(c.default || c))
export const CommentUser = () => import('../../components/CommentUser.vue' /* webpackChunkName: "components/comment-user" */).then(c => wrapFunctional(c.default || c))
export const Content = () => import('../../components/Content.vue' /* webpackChunkName: "components/content" */).then(c => wrapFunctional(c.default || c))
export const ContentBottom = () => import('../../components/ContentBottom.vue' /* webpackChunkName: "components/content-bottom" */).then(c => wrapFunctional(c.default || c))
export const ContentFile = () => import('../../components/ContentFile.vue' /* webpackChunkName: "components/content-file" */).then(c => wrapFunctional(c.default || c))
export const MarkdownRenderer = () => import('../../components/MarkdownRenderer.vue' /* webpackChunkName: "components/markdown-renderer" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const SvgIcon = () => import('../../components/SvgIcon/index.vue' /* webpackChunkName: "components/svg-icon" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
