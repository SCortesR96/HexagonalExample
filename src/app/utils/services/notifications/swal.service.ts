import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

interface ToastInterface {
    icon: 'error' | 'info' | 'question' | 'success' | 'warning';
    title: string;
    text?: string;
    html?: string;
    timer?: number;
}

@Injectable({
    providedIn: 'root',
})
export class SwalService {
    static Toast({
        icon,
        title,
        text = '',
        html = '',
        timer = 1000,
    }: ToastInterface) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
        });
        Toast.fire({ icon, title, text, html });
    }
}
