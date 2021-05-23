def days_in_month():
    months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September' 'October', 'November', 'December']
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    x = 0
    while x < len(months):
        print(f'{months[x]} = {days[x]}')

        x += 1


def days_in_month_tuple():
    months = ('January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September' 'October', 'November', 'December')
    days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    y = 0
    while y < len(months):
        print(f'{months[y]} = {days[y]}')
    y += 1


def print_date_dict():
    month_days = {
        "Jaunary": 31,
        "February": 28, 
        "March": 31,
         'April': 30, 
         'May': 31, 
         'June': 30, 
         'July': 31, 'August': 31, 
         'September': 30, "October": 31, 
         'November': 30, 'December': 31
    }
    for month in month_days  :
        print(f'{month} = {month_days[month]}')


def print_days(month) :
    month_days = {
        "Jaunary": 31,
        "February": 28, 
        "March": 31,
         'April': 30, 
         'May': 31, 
         'June': 30, 
         'July': 31, 'August': 31, 
         'September': 30, "October": 31, 
         'November': 30, 'December': 31
    }
    return (month_days[month])

month_to_get= 'April'
print(f'{month_to_get} has {print_days(month_to_get)} days')






    
