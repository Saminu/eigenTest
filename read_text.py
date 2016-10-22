f = open("text/sample_text.txt", "r")
data = f.read()

def read_text(d):
    rows_list = []
    rows = d.split("\n")
    last_value = len(rows) - 1

    data_split = rows[0:last_value]
    for item in data_split:

        if len(item) > 0:
            paragraph = {'parag': item}
            rows_list.append(paragraph)
    return rows_list

cleaned_data = read_text(data)
