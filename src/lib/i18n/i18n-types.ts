// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	errors: {
		name: {
			/**
			 * A​p​p​l​i​c​a​t​i​o​n​ ​E​r​r​o​r
			 */
			internal: string
		}
		message: {
			/**
			 * i​f​ ​i​t​ ​p​r​e​s​i​s​t​s​ ​p​l​e​a​s​e​ ​c​o​n​t​a​c​t​ ​s​u​p​p​o​r​t
			 */
			application: string
			/**
			 * T​o​o​ ​m​a​n​y​ ​r​e​q​u​e​s​t​s
			 */
			tooManyRequests: string
			/**
			 * N​o​t​ ​f​o​u​n​d
			 */
			notFound: string
			/**
			 * I​n​v​a​l​i​d
			 */
			invalid: string
			/**
			 * R​e​q​u​i​r​e​d
			 */
			required: string
			/**
			 * F​a​i​l​e​d​ ​t​o​ ​p​r​o​c​e​s​s​ ​f​i​l​e
			 */
			failedToProcessImageMessage: string
		}
	}
	signIn: {
		/**
		 * S​i​g​n​ ​i​n
		 */
		title: string
		/**
		 * E​n​t​e​r​ ​p​a​s​s​w​o​r​d
		 */
		passwordPlaceholder: string
		/**
		 * S​i​g​n​ ​i​n
		 */
		signIn: string
	}
	home: {
		/**
		 * P​r​e​t​z​e​l​ ​R​e​v​i​e​w
		 */
		title: string
		/**
		 * S​o​f​t​ ​P​r​e​t​z​e​l​s​ ​R​e​v​i​e​w​ ​w​e​b​s​i​t​e
		 */
		description: string
	}
	posts: {
		/**
		 * P​o​s​t​s
		 */
		title: string
		/**
		 * B​a​c​k
		 */
		back: string
		/**
		 * R​e​v​i​e​w
		 */
		review: string
		/**
		 * F​l​a​v​o​r
		 */
		flavor: string
		/**
		 * T​e​x​t​u​r​e
		 */
		texture: string
		/**
		 * S​h​a​p​e
		 */
		shape: string
		/**
		 * S​a​l​t
		 */
		salt: string
		/**
		 * S​i​d​e​s
		 */
		sides: string
		/**
		 * A​d​d​r​e​s​s
		 */
		address: string
		/**
		 * T​i​t​l​e
		 */
		titleLabel: string
		/**
		 * T​i​t​l​e
		 */
		titlePlaceholder: string
		/**
		 * U​R​I
		 */
		uriLabel: string
		/**
		 * U​R​I
		 */
		uriPlaceholder: string
		/**
		 * F​l​a​v​o​r​ ​R​e​v​i​e​w
		 */
		flavorReviewLabel: string
		/**
		 * F​l​a​v​o​r​ ​R​e​v​i​e​w
		 */
		flavorReviewPlaceholder: string
		/**
		 * T​e​x​t​u​r​e​ ​R​e​v​i​e​w
		 */
		textureReviewLabel: string
		/**
		 * T​e​x​t​u​r​e​ ​R​e​v​i​e​w
		 */
		textureReviewPlaceholder: string
		/**
		 * S​h​a​p​e​ ​R​e​v​i​e​w
		 */
		shapeReviewLabel: string
		/**
		 * S​h​a​p​e​ ​R​e​v​i​e​w
		 */
		shapeReviewPlaceholder: string
		/**
		 * S​a​l​t​ ​R​e​v​i​e​w
		 */
		saltReviewLabel: string
		/**
		 * S​a​l​t​ ​R​e​v​i​e​w
		 */
		saltReviewPlaceholder: string
		/**
		 * S​i​d​e​s​ ​R​e​v​i​e​w
		 */
		sidesReviewLabel: string
		/**
		 * S​i​d​e​s​ ​R​e​v​i​e​w
		 */
		sidesReviewPlaceholder: string
		/**
		 * D​e​s​c​r​i​p​t​i​o​n
		 */
		descriptionLabel: string
		/**
		 * D​e​s​c​r​i​p​t​i​o​n
		 */
		descriptionPlaceholder: string
		/**
		 * A​d​d​r​e​s​s
		 */
		addressLabel: string
		/**
		 * A​d​d​r​e​s​s
		 */
		addressPlaceholder: string
		/**
		 * I​m​a​g​e​s
		 */
		imagesLabel: string
		/**
		 * I​m​a​g​e​s
		 */
		imagesPlaceholder: string
		'new': {
			/**
			 * N​e​w​ ​P​o​s​t
			 */
			title: string
			/**
			 * P​o​s​t
			 */
			post: string
		}
		edit: {
			/**
			 * E​d​i​t​ ​P​o​s​t
			 */
			title: string
			/**
			 * S​a​v​e
			 */
			save: string
		}
	}
	upload: {
		/**
		 * {​d​r​a​g​g​i​n​g​|​{​t​r​u​e​:​ ​d​r​o​p​,​ ​f​a​l​s​e​:​ ​d​r​a​g​ ​f​i​l​e​ ​o​r​ ​c​l​i​c​k​/​p​r​e​s​s​ ​t​o​ ​u​p​l​o​a​d​}​}
		 * @param {boolean} dragging
		 */
		dropArea: RequiredParams<`dragging|{true:${string}, false:${string}}`>
	}
}

export type TranslationFunctions = {
	errors: {
		name: {
			/**
			 * Application Error
			 */
			internal: () => LocalizedString
		}
		message: {
			/**
			 * if it presists please contact support
			 */
			application: () => LocalizedString
			/**
			 * Too many requests
			 */
			tooManyRequests: () => LocalizedString
			/**
			 * Not found
			 */
			notFound: () => LocalizedString
			/**
			 * Invalid
			 */
			invalid: () => LocalizedString
			/**
			 * Required
			 */
			required: () => LocalizedString
			/**
			 * Failed to process file
			 */
			failedToProcessImageMessage: () => LocalizedString
		}
	}
	signIn: {
		/**
		 * Sign in
		 */
		title: () => LocalizedString
		/**
		 * Enter password
		 */
		passwordPlaceholder: () => LocalizedString
		/**
		 * Sign in
		 */
		signIn: () => LocalizedString
	}
	home: {
		/**
		 * Pretzel Review
		 */
		title: () => LocalizedString
		/**
		 * Soft Pretzels Review website
		 */
		description: () => LocalizedString
	}
	posts: {
		/**
		 * Posts
		 */
		title: () => LocalizedString
		/**
		 * Back
		 */
		back: () => LocalizedString
		/**
		 * Review
		 */
		review: () => LocalizedString
		/**
		 * Flavor
		 */
		flavor: () => LocalizedString
		/**
		 * Texture
		 */
		texture: () => LocalizedString
		/**
		 * Shape
		 */
		shape: () => LocalizedString
		/**
		 * Salt
		 */
		salt: () => LocalizedString
		/**
		 * Sides
		 */
		sides: () => LocalizedString
		/**
		 * Address
		 */
		address: () => LocalizedString
		/**
		 * Title
		 */
		titleLabel: () => LocalizedString
		/**
		 * Title
		 */
		titlePlaceholder: () => LocalizedString
		/**
		 * URI
		 */
		uriLabel: () => LocalizedString
		/**
		 * URI
		 */
		uriPlaceholder: () => LocalizedString
		/**
		 * Flavor Review
		 */
		flavorReviewLabel: () => LocalizedString
		/**
		 * Flavor Review
		 */
		flavorReviewPlaceholder: () => LocalizedString
		/**
		 * Texture Review
		 */
		textureReviewLabel: () => LocalizedString
		/**
		 * Texture Review
		 */
		textureReviewPlaceholder: () => LocalizedString
		/**
		 * Shape Review
		 */
		shapeReviewLabel: () => LocalizedString
		/**
		 * Shape Review
		 */
		shapeReviewPlaceholder: () => LocalizedString
		/**
		 * Salt Review
		 */
		saltReviewLabel: () => LocalizedString
		/**
		 * Salt Review
		 */
		saltReviewPlaceholder: () => LocalizedString
		/**
		 * Sides Review
		 */
		sidesReviewLabel: () => LocalizedString
		/**
		 * Sides Review
		 */
		sidesReviewPlaceholder: () => LocalizedString
		/**
		 * Description
		 */
		descriptionLabel: () => LocalizedString
		/**
		 * Description
		 */
		descriptionPlaceholder: () => LocalizedString
		/**
		 * Address
		 */
		addressLabel: () => LocalizedString
		/**
		 * Address
		 */
		addressPlaceholder: () => LocalizedString
		/**
		 * Images
		 */
		imagesLabel: () => LocalizedString
		/**
		 * Images
		 */
		imagesPlaceholder: () => LocalizedString
		'new': {
			/**
			 * New Post
			 */
			title: () => LocalizedString
			/**
			 * Post
			 */
			post: () => LocalizedString
		}
		edit: {
			/**
			 * Edit Post
			 */
			title: () => LocalizedString
			/**
			 * Save
			 */
			save: () => LocalizedString
		}
	}
	upload: {
		/**
		 * {dragging|{true: drop, false: drag file or click/press to upload}}
		 */
		dropArea: (arg: { dragging: boolean }) => LocalizedString
	}
}

export type Formatters = {}
