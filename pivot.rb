arr = [1, 2, 3, 3]

def left_equal_right(arr)
  left = 0
  right = arr.reduce(:+)

  arr.each do |x|
    right -= x
    return x if left == right
    left += x
  end
  x
end

p left_equal_right(arr)
