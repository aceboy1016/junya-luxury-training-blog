import { defineArrayMember, defineField, defineType } from 'sanity'

const slug = defineField({
  name: 'slug', type: 'slug', title: 'URLスラッグ',
  options: { source: (doc) => String(doc.title || doc.name || ''), slugify: (input) => input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') },
  validation: (rule) => rule.required().custom((value) => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) || '英小文字・数字・ハイフンのみで入力してください'),
})
const image = (name: string) => defineField({
  name, type: 'image', options: { hotspot: true },
  fields: [defineField({ name: 'alt', title: '代替テキスト', type: 'string', validation: (rule) => rule.required() })],
})
const active = defineField({ name: 'isActive', type: 'boolean', initialValue: true, validation: (rule) => rule.required() })

export const schemaTypes = [
  defineType({ name: 'post', title: '記事', type: 'document', fields: [
    defineField({ name: 'title', title: 'タイトル', type: 'string', validation: (rule) => rule.required() }),
    slug,
    defineField({ name: 'excerpt', type: 'text' }),
    image('mainImage'),
    defineField({ name: 'body', title: '本文', type: 'array', validation: (rule) => rule.required().min(1), of: [
      defineArrayMember({ type: 'block', styles: [{title: '本文', value: 'normal'}, {title: '見出し2', value: 'h2'}, {title: '見出し3', value: 'h3'}, {title: '見出し4', value: 'h4'}, {title: '引用', value: 'blockquote'}] }),
      defineArrayMember({ type: 'image', options: { hotspot: true }, fields: [defineField({name: 'alt', type: 'string', validation: (rule) => rule.required()}), defineField({name: 'caption', type: 'string'})] }),
    ] }),
    defineField({ name: 'categories', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})] }),
    defineField({ name: 'tags', type: 'array', of: [defineArrayMember({type: 'string'})] }),
    defineField({ name: 'author', type: 'reference', to: [{type: 'author'}], validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({ name: 'isPublished', title: 'サイトに公開する', type: 'boolean', initialValue: false, validation: (rule) => rule.required() }),
    defineField({ name: 'isFeatured', type: 'boolean', description: '公開日の新しい順に最大3件を表示します。' }),
    defineField({ name: 'views', type: 'number', readOnly: true, initialValue: 0 }),
    defineField({ name: 'seo', type: 'object', fields: [
      defineField({ name: 'metaTitle', type: 'string' }),
      defineField({ name: 'metaDescription', type: 'text', validation: (rule) => rule.max(120) }),
      defineField({ name: 'keywords', type: 'array', of: [defineArrayMember({type: 'string'})] }),
      image('ogImage'),
      defineField({ name: 'noIndex', type: 'boolean', initialValue: false }),
      defineField({ name: 'canonicalUrl', type: 'url', validation: (rule) => rule.uri({scheme: ['https', 'http']}) }),
    ] }),
  ], preview: {select: {title: 'title', media: 'mainImage'}} }),
  defineType({ name: 'category', title: 'カテゴリ', type: 'document', fields: [
    defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}), slug,
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'color', type: 'string', initialValue: '#4A98D0', validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/)}),
    defineField({name: 'order', type: 'number'}), active,
  ] }),
  defineType({ name: 'author', title: '著者', type: 'document', fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}), slug, image('image'),
    defineField({name: 'bio', type: 'text'}),
    defineField({name: 'qualification', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({name: 'socialLinks', type: 'object', fields: ['instagram', 'twitter', 'facebook', 'youtube', 'website'].map((name) => defineField({name, type: 'url'}))}), active,
  ], preview: {select: {title: 'name', media: 'image'}} }),
]
