import React from "react";
import css from "./Settings.module.css";

export default function Settings() {
  return (
    <>
      <section className={css.settings}>
        <div className={css.settings_container}>
          <h2 className={css.settings_header}>Особистий кабінет</h2>
          <div className={css.settings_form}>
            <ul className={css.settings_list}>
              <li className={css.settings_item}>
                <div className={css.settings_label_wrap}>
                  <label className={css.settings_label} htmlFor="password">
                    <span className={css.settings_label_span}>
                      {" "}
                      Зміна паролю
                    </span>
                  </label>
                </div>
                <div className={css.settings_input_holder}>
                  <input
                    placeholder="Новий пароль"
                    id="password"
                    className={css.settings_input}
                    type=""
                  />
                  <input
                    placeholder="Повтор нового паролю"
                    className={css.settings_input}
                  />
                  <button className={css.setting_form_button}>
                    Застосувати
                  </button>
                </div>
              </li>
              <li className={css.settings_item}>
                <div className={css.settings_label_wrap}>
                  <label className={css.settings_label} htmlFor="name">
                    <span className={css.settings_label_span}>
                      Особисті дані{" "}
                    </span>
                  </label>
                </div>
                <div className={css.settings_input_holder}>
                  <input
                    placeholder="Ім`я"
                    id="name"
                    className={css.settings_input}
                    type=""
                  />
                  <input
                    placeholder="Прізвище"
                    className={css.settings_input}
                  />
                </div>
              </li>
              <li className={css.settings_item}>
                <div className={css.settings_label_wrap}>
                  <label className={css.settings_label} htmlFor="email">
                    <span className={css.settings_label_span}>
                      Зміна Email{" "}
                    </span>
                  </label>
                </div>
                <div className={css.settings_input_holder}>
                  <input
                    placeholder="Email"
                    id="email"
                    className={css.settings_input}
                    type=""
                  />
                  <button
                    className={`${css.setting_form_button} ${css.verification_button__margin}`}
                  >
                    Верифікація
                  </button>
                </div>
              </li>

              <li className={css.settings_item}>
                <p className={css.settings_form_text}>
                  Наразі підключено Email:{" "}
                  <a href="/#" className={css.settings_email_link}>
                    email@email.com
                  </a>
                  , для його зміни зазначте у поле нову адресу та пройдіть
                  верифікацію
                </p>
              </li>
              <li className={css.settings_item}>
                <div className={css.settings_label_wrap}>
                  <label
                    className={css.settings_label}
                    htmlFor="telegram_connect"
                  >
                    <span className={css.settings_label_span}>
                      Telegram підключення
                    </span>
                  </label>
                </div>
                <div
                  className={`${css.settings_input_holder} ${css.input_holder_padding}`}
                >
                  <input
                    placeholder="Введіть Ваш ID Telegram"
                    id="telegram_connect"
                    className={css.settings_input}
                    type=""
                  />
                  <button className={css.setting_form_button}>
                    Застосувати
                  </button>
                </div>
              </li>
              <li className={css.settings_item}>
                <p className={css.settings_form_text}>
                  Підключить до свого обліковго запису, спеціалізованого бота,
                  та відслідковуйте пошукові зхапити
                  <a href="/#" className={css.settings_link}>
                    {" "}
                    Як отримати мій Telegram ID?
                  </a>
                </p>
              </li>
            </ul>
            <p className={css.settings_paragraph}>
              Для налаштування пошуковго{" "}
              <a className={css.settings_paragraph_link} href="/#">
                Telegram-бота
              </a>
              , після підключення Telegram, необхідно активувати його в
              особистому обліковому записі. Для запуску бота натисніть Start у
              додатку Telrgram
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
