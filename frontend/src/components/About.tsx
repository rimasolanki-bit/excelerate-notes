import React, { useState, useEffect } from "react";
import { getVersion } from '@tauri-apps/api/app';
import Image from 'next/image';

// Excelerate Notes: About panel.
// Personal, offline meeting and webinar notetaker for Excelerate Accounting Academy.
// Update checks and usage analytics are intentionally not offered here.
export function About() {
    const [currentVersion, setCurrentVersion] = useState<string>('0.5.0');

    useEffect(() => {
        getVersion().then(setCurrentVersion).catch(console.error);
    }, []);

    return (
        <div className="p-4 space-y-4 h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="text-center rounded-lg bg-[#3B1417] py-5 px-4">
                <Image
                    src="/logo.png"
                    alt="Excelerate Accounting Academy"
                    width={180}
                    height={156}
                    className="mx-auto object-contain"
                />
                <h1 className="mt-2 text-xl font-bold text-[#C9A84C]">Excelerate Notes</h1>
                <span className="text-sm text-[#FBF4E6]">Version {currentVersion}</span>
            </div>

            <p className="text-sm text-[#1F1F1F] text-center">
                Detailed webinar and meeting notes, captured on this computer.
                Audio, transcripts and notes stay on this laptop.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#FBF4E6] rounded p-3">
                    <h3 className="font-bold text-sm text-[#3B1417] mb-1">No meeting bot</h3>
                    <p className="text-xs text-[#1F1F1F] leading-relaxed">Records your microphone and computer audio. Nothing joins the call.</p>
                </div>
                <div className="bg-[#FBF4E6] rounded p-3">
                    <h3 className="font-bold text-sm text-[#3B1417] mb-1">Offline</h3>
                    <p className="text-xs text-[#1F1F1F] leading-relaxed">Transcription and summaries run on local models. No subscription costs.</p>
                </div>
                <div className="bg-[#FBF4E6] rounded p-3">
                    <h3 className="font-bold text-sm text-[#3B1417] mb-1">Any platform</h3>
                    <p className="text-xs text-[#1F1F1F] leading-relaxed">Zoom, Google Meet, Teams, YouTube webinars and recordings.</p>
                </div>
                <div className="bg-[#FBF4E6] rounded p-3">
                    <h3 className="font-bold text-sm text-[#3B1417] mb-1">Recording consent</h3>
                    <p className="text-xs text-[#1F1F1F] leading-relaxed">Check that the organiser allows recording before you start.</p>
                </div>
            </div>

            {/* Footer and licence attribution */}
            <div className="pt-3 border-t border-[#C9A87E] text-center space-y-1">
                <p className="text-xs text-[#3B1417] font-semibold">
                    Prepared by: Rima Solanki, Excelerate Accounting Academy
                </p>
                <p className="text-xs text-gray-500">
                    Based on Meetily Community Edition by Zackriya Solutions, used under the MIT Licence.
                </p>
            </div>
        </div>
    )
}
