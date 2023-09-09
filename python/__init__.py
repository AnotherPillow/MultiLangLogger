import colorama, time, os

"""
    This code is licensed under GNU GPL v3.0. The original repository can be found at: https://github.com/AnotherPillow/MultiLangLogger    
    """
if os.name == 'nt':
    colorama.just_fix_windows_console()

class Logger:
    time_color = colorama.Fore.LIGHTBLACK_EX
    time_format = '%Y-%m-%d %H:%M:%S'

    info_color = colorama.Fore.LIGHTBLUE_EX
    warn_color = colorama.Fore.LIGHTYELLOW_EX
    error_color = colorama.Fore.LIGHTRED_EX
    success_color = colorama.Fore.LIGHTGREEN_EX

    
    type_col_dict = {
        'info': info_color,
        'warn': warn_color,
        'error': error_color
    }
    
    name_color = colorama.Fore.LIGHTMAGENTA_EX


    def __init__(self, name: str):
        """Creates a new logger instance."""
        self.name = name

    def __Log(
        self,
        message: str,
        type: str
    ):
        if type in self.type_col_dict:
            type_color = self.type_col_dict[type]
        else:
            type_color = self.info_color

        print(
            f'{self.time_color}{time.strftime(self.time_format)}{colorama.Fore.RESET} '
            f'{type_color}{type.upper()}{colorama.Fore.RESET}{" " * ((5 - len(type)) + 4)}'
            f'{self.name_color}{self.name}{colorama.Fore.RESET} '
            f'{message}'
        )

    def info(self, message: str):
        self.__Log(message, 'info')

    def warn(self, message: str):
        self.__Log(message, 'warn')

    def error(self, message: str):
        self.__Log(message, 'error')
