#!/bin/bash

# List all .webp files in the current directory
files=(*.webp)

# Get the number of files
num_files=${#files[@]}

# Generate a sequence of numbers from 1 to num_files
seq_numbers=$(seq -f "%02g" 1 $num_files)

# Shuffle the sequence of numbers
shuffled_numbers=$(echo $seq_numbers | tr " " "\n" | shuf | tr "\n" " ")

# Convert shuffled_numbers to an array
shuffled_array=($shuffled_numbers)

# Rename files to temporary names to avoid conflicts
temp_prefix="temp_renaming_"
for i in "${!files[@]}"; do
    old_file="${files[$i]}"
    temp_file="${temp_prefix}${i}.webp"
    mv "$old_file" "$temp_file"
done

# Rename temporary files to the final names
for i in "${!files[@]}"; do
    temp_file="${temp_prefix}${i}.webp"
    new_file="gallery-${shuffled_array[$i]}.webp"
    mv "$temp_file" "$new_file"
done

echo "Renaming completed!"
