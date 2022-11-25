import css from "./BotSearchSettings.module.css";
import { ReactComponent as IconFile } from "../../images/svg/file_svg.svg";
import { ReactComponent as IconEdit } from "../../images/svg/edit_svg.svg";
import { ReactComponent as IconDelete } from "../../images/svg/delete_svg.svg";
import { ReactComponent as IconPlus } from "../../images/svg/plus-circle_svg.svg";

export default function BotSearchSettings() {
  return (
    <>
      <div className={css.settings_container}>
        <h2 className={css.settings_header}>Налаштувати пошукового бота</h2>
        <div className={css.bot_settings}>
          <div className={css.bot_settings_title}>Мої пошукові запити</div>
          <form className={css.bot_form}>
            <ul className={css.bot_form_list}>
              <li className={css.bot_form_item}>
                <button type="button" className={css.bot_form_file_button}>
                  <IconFile className={css.bot_form_icon_file} />
                </button>
                <input
                  placeholder="Порошенко Петро"
                  type="text"
                  className={css.bot_form_text_input}
                />
                <input
                  type="checkbox"
                  className={css.bot_form_checkbox_input}
                />
                <button type="button" className={css.bot_form_edit_button}>
                  <IconEdit className={css.bot_form_icon_edit} />
                </button>
                <button type="button" className={css.bot_form_delete_button}>
                  <IconDelete className={css.bot_form_icon_delete} />
                </button>
              </li>
              <li className={css.bot_form_item}>
                <button type="button" className={css.bot_form_file_button}>
                  <IconFile className={css.bot_form_icon_file} />
                </button>
                <input
                  placeholder="Маріхуана"
                  type="text"
                  className={css.bot_form_text_input}
                />
                <input
                  type="checkbox"
                  className={css.bot_form_checkbox_input}
                />
                <button type="button" className={css.bot_form_edit_button}>
                  <IconEdit className={css.bot_form_icon_edit} />
                </button>
                <button type="button" className={css.bot_form_delete_button}>
                  <IconDelete className={css.bot_form_icon_delete} />
                </button>
              </li>
              <li className={css.bot_form_item}>
                <button type="button" className={css.bot_form_file_button}>
                  <IconFile className={css.bot_form_icon_file} />
                </button>
                <input
                  placeholder="Порошенко Петро"
                  type="text"
                  className={css.bot_form_text_input}
                />
                <input
                  type="checkbox"
                  className={css.bot_form_checkbox_input}
                />
                <button type="button" className={css.bot_form_edit_button}>
                  <IconEdit className={css.bot_form_icon_edit} />
                </button>
                <button type="button" className={css.bot_form_delete_button}>
                  <IconDelete className={css.bot_form_icon_delete} />
                </button>
              </li>
            </ul>
            <button type="submit" className={css.bot_form_submit_button}>
              Додати
              <IconPlus className={css.bot_form_icon_palus} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
