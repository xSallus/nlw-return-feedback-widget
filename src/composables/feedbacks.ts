import { ref, Ref } from 'vue'
import { api } from './api.ts'

import {
	PhGhost, PhLightbulb, PhWarningOctagon
} from "phosphor-vue";

import html2canvas from "html2canvas"

export const Feedbacks= {
	BUG: {
		title: 'Trouble',
		icon: PhWarningOctagon
	},
	IDEA: {
		title: 'Idea',
		icon: PhLightbulb
	},
	OTHER: {
		title: 'Other',
		icon: PhGhost
	}
}

export type IFeedbackType =	keyof typeof Feedbacks;

export type WidgetContentProps = {
	title: string;
	icon: typeof PhGhost;
};

export const hasSentFeedback: Ref<boolean> = ref(false)

export async function takeScreenshot() {
	const canvas = await html2canvas(document.body)
	const base64 = canvas.toDataURL()
	return base64;
}

interface IFeedbackResponse {
	data: { success: boolean }
}

type ISendFeedbackFunction = (
	type: IFeedbackType,
	comment: string,
	screenshot: string
) => Promise<boolean>;

export const sendFeedback:ISendFeedbackFunction = async (
	type, comment, screenshot
) => {
	console.log({
		type,
		comment,
		screenshot
  })
	/*const { data } = await api.post<IFeedbackResponse>(
		"/feedbacks",
		{ comment, screenshot, type }
	)

	return data.success;*/
 retrn true;
}
